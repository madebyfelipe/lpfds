import Image from "next/image";

const logos = [
  { src: "/logo-client-1.png", alt: "Cliente 1" },
  { src: "/logo-client-2.png", alt: "Cliente 2" },
  { src: "/logo-client-3.png", alt: "Cliente 3" },
  { src: "/logo-client-4.png", alt: "Cliente 4" },
  { src: "/logo-client-5.png", alt: "Cliente 5" },
];

export function TrustBar() {
  const track = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="trust-bar">
      <div className="trust-bar__carousel">
        <div className="trust-bar__track">
          {track.map((logo, i) => (
            <div key={i} className="trust-bar__logo-wrap">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={280}
                height={112}
                className="trust-bar__logo"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
