import Image from "next/image";

export function HubBio() {
  return (
    <section id="sobre" className="hub-bio">
      <div className="hub-bio__portrait">
        <Image
          src="/eu.jpg"
          alt="Felipe — Designer de marca"
          width={280}
          height={340}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>

      <div>
        <span className="hub-bio__badge">FELIPE</span>
        <h2 className="hub-bio__title">Oi, eu sou o Felipe.</h2>
        <p className="hub-bio__text">
          Sou designer de marca com anos de estrada atendendo Sorocaba e região.
          Meu trabalho é ajudar negócios a parecerem — e serem — mais fortes.
        </p>
        <p className="hub-bio__text">
          Acredito que design bonito não basta: ele precisa trabalhar pelo seu
          resultado. Boring is bad for business.
        </p>
      </div>
    </section>
  );
}
