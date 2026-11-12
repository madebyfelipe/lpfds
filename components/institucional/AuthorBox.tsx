import Image from "next/image";
import Link from "next/link";

/**
 * Autoria no fim do artigo. O texto só repete o que já está aprovado no
 * `HubBio` (sete anos de marca, atende psicólogos): nenhum número ou título
 * novo entra aqui sem prova.
 */
export function AuthorBox() {
  return (
    <aside className="inst-author" aria-label="Sobre o autor">
      <Image
        src="/eu.jpg"
        alt=""
        width={160}
        height={160}
        sizes="80px"
        className="inst-author__img"
      />
      <div>
        <p className="inst-kicker inst-kicker--tight">Sobre o autor</p>
        <p className="inst-author__name">Felipe Silva</p>
        <p className="inst-author__bio">
          Estrategista de marca. Constrói marca há sete anos e hoje atende exclusivamente psicólogos.
        </p>
        <Link href="/metodologia" className="inst-link">
          Conheça o método →
        </Link>
      </div>
    </aside>
  );
}
