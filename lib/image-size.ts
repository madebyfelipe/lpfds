import { readFileSync } from "node:fs";
import path from "node:path";

export type ImageSize = { width: number; height: number };

// Cache em memória: as páginas são estáticas, então cada arquivo é lido
// uma única vez durante o build.
const cache = new Map<string, ImageSize>();

// Lê as dimensões reais de uma imagem em /public direto do cabeçalho do
// arquivo (PNG ou JPEG), em build time. Com width/height reais no <Image>,
// o navegador reserva a proporção antes do download — sem layout shift.
export function getImageSize(publicPath: string): ImageSize {
  const cached = cache.get(publicPath);
  if (cached) return cached;

  const file = readFileSync(path.join(process.cwd(), "public", publicPath));
  const size = publicPath.toLowerCase().endsWith(".png")
    ? pngSize(file)
    : jpegSize(file, publicPath);
  cache.set(publicPath, size);
  return size;
}

// PNG: largura/altura ficam no chunk IHDR, sempre nos bytes 16–23.
function pngSize(buf: Buffer): ImageSize {
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

// JPEG: varre os segmentos até o primeiro SOF (start of frame),
// que carrega altura (offset +5) e largura (offset +7) do marcador.
function jpegSize(buf: Buffer, publicPath: string): ImageSize {
  let offset = 2; // pula o SOI (FF D8)
  while (offset + 9 < buf.length) {
    if (buf[offset] !== 0xff) {
      offset += 1;
      continue;
    }
    const marker = buf[offset + 1];
    if (marker === 0xff) {
      offset += 1; // byte de preenchimento
      continue;
    }
    // marcadores sem payload (RST, SOI, EOI, TEM)
    if (marker === 0x01 || (marker >= 0xd0 && marker <= 0xd9)) {
      offset += 2;
      continue;
    }
    const isSOF =
      marker >= 0xc0 &&
      marker <= 0xcf &&
      marker !== 0xc4 &&
      marker !== 0xc8 &&
      marker !== 0xcc;
    if (isSOF) {
      return {
        height: buf.readUInt16BE(offset + 5),
        width: buf.readUInt16BE(offset + 7),
      };
    }
    offset += 2 + buf.readUInt16BE(offset + 2);
  }
  throw new Error(`Dimensões JPEG não encontradas em ${publicPath}`);
}
