"use client";

import { useState } from "react";

export function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="video-block sr">
      <div className="video-card">
        <div className="video-card__frame">
          <span className="video-card__floating video-card__floating--left">Branding estratégico</span>
          <span className="video-card__floating video-card__floating--right">Conteúdo com direção</span>

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
                    Clique para abrir o espaço do vídeo. O embed definitivo entra aqui na publicação.
                  </p>
                </div>
              </div>
            </button>
          ) : (
            <div className="video-card__placeholder">
              {/* SUBSTITUIR: inserir embed do vídeo aqui */}
              <div className="video-card__stack">
                <span className="tag">Espaço pronto para a VSL</span>
                <p className="video-card__text">
                  A estrutura já está pronta para receber um iframe, player customizado ou vídeo
                  hospedado.
                </p>
                <button
                  type="button"
                  onClick={() => setIsPlaying(false)}
                  className="button button--ghost"
                >
                  Fechar preview
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <p className="video-card__note">
        Assista e descubra como posicionar seu negócio em 21 dias
      </p>
    </div>
  );
}
