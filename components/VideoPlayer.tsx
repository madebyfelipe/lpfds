"use client";

import { useState } from "react";

export function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="video-block sr">
      <div className="video-card">
        <div className="video-card__frame">
          <span className="video-card__floating video-card__floating--left">Branding estratégico</span>
          <span className="video-card__floating video-card__floating--right video-card__floating--fomo">
            <span className="video-card__fomo-dot" />
            4 vagas restantes
          </span>

          {!isPlaying ? (
            <button
              type="button"
              onClick={() => setIsPlaying(true)}
              aria-label="Abrir player da VSL"
              className="video-card__button"
            >
              <div className="video-card__stack">
                <span className="video-card__play">
                  <svg viewBox="0 0 24 24" className="video-card__playIcon" aria-hidden="true">
                    <path d="M8 5.14v13.72a1 1 0 0 0 1.53.85l10.77-6.86a1 1 0 0 0 0-1.69L9.53 4.29A1 1 0 0 0 8 5.14Z" />
                  </svg>
                </span>
                <div>
                  <p className="video-card__label">VSL exclusiva</p>
                  <p className="video-card__text">
                    Clique para assistir
                  </p>
                </div>
              </div>
            </button>
          ) : (
            <iframe
              className="video-card__video"
              src="https://www.youtube.com/embed/yQ1eYsySZ-E?autoplay=1&rel=0&modestbranding=1"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          )}
        </div>
      </div>
      <p className="video-card__note">
        Assista e descubra como posicionar seu negócio em 21 dias
      </p>
    </div>
  );
}
