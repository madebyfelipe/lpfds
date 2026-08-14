import Image from "next/image";
import { clientLogos } from "@/lib/institucional";

// Faixa vermelha com os logos passando — mesma estrutura da TrustBar da
// home antiga, nas cores do site institucional. Os PNGs dos clientes são
// brancos, então vão sobre o vermelho (no fundo cream sumiam).
export function InstTrustBar() {
  const track = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <div className="inst-trust">
      <div className="inst-trust__carousel">
        <div className="inst-trust__track">
          {track.map((logo, index) => (
            <div key={index} className="inst-trust__cell">
              <Image
                src={logo.src}
                alt={index < clientLogos.length ? logo.alt : ""}
                aria-hidden={index >= clientLogos.length}
                width={280}
                height={112}
                className="inst-trust__logo"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
