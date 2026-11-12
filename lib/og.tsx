import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

/**
 * Imagem de compartilhamento (og:image) do site institucional e dos posts.
 * Gerada no build (rotas estáticas) — não há render por requisição.
 *
 * O Satori (motor do next/og) não lê CSS custom properties, então os tokens
 * de app/institucional.css são espelhados aqui. Tema claro fixo: a imagem
 * vive fora do site, onde o toggle de tema não existe.
 */
const t = {
  cream: "#f6f6f6", // --cream
  black: "#151515", // --black
  red: "#bc0319", // --red (preenchimento)
  gray500: "#696969" // --gray-500 (kicker)
};

export const ogSize = { width: 1200, height: 630 };
export const ogAlt = "Made by Felipe — branding para consultórios de psicologia";

export async function renderOg({ kicker, title }: { kicker: string; title: string }) {
  const fonts = join(process.cwd(), "public/fonts");
  const [bold, roman] = await Promise.all([
    readFile(join(fonts, "NeueHaasDisplayBold.ttf")),
    readFile(join(fonts, "NeueHaasDisplayRoman.ttf"))
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: t.cream,
          color: t.black,
          fontFamily: "Neue Haas Grotesk Display",
          padding: "64px 72px 0"
        }}
      >
        <div style={{ display: "flex", fontSize: 30, fontWeight: 700 }}>Made by Felipe®</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: t.gray500,
              marginBottom: 24
            }}
          >
            {`— ${kicker}`}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: title.length > 60 ? 64 : 76,
              fontWeight: 700,
              lineHeight: 1.04,
              letterSpacing: "-0.02em",
              maxWidth: 1000
            }}
          >
            {title}
          </div>
        </div>
        {/* Faixa vermelha da marca no pé — preenchimento, papel do --red. */}
        <div style={{ display: "flex", height: 16, margin: "0 -72px", background: t.red }} />
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Neue Haas Grotesk Display", data: bold, weight: 700, style: "normal" },
        { name: "Neue Haas Grotesk Display", data: roman, weight: 400, style: "normal" }
      ]
    }
  );
}
