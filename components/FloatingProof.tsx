type FloatingProofProps = {
  initials: string;
  handle: string;
  quote: string;
  className?: string;
};

export function FloatingProof({ initials, handle, quote, className = "" }: FloatingProofProps) {
  return (
    <article className={`proof-card ${className}`}>
      <div className="proof-card__head">
        <div className="proof-card__avatar">{initials}</div>
        <div>
          <p className="proof-card__handle">{handle}</p>
          <p className="proof-card__label">Cliente Made by Felipe</p>
        </div>
      </div>

      <p className="proof-card__quote">{quote}</p>

      <div className="proof-card__actions" aria-hidden="true">
        <span className="proof-card__action">↩</span>
        <span className="proof-card__action">Reply</span>
      </div>
    </article>
  );
}
