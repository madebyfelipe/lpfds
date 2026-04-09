import { trustedMarks } from "@/lib/data";

export function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="site-shell">
        <div className="trust-bar__inner">
          <span className="trust-bar__label">Atendemos profissionais de</span>
          <div className="trust-bar__marks">
            {trustedMarks.map((mark) => (
              <span key={mark} className="trust-bar__mark">
                {mark}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
