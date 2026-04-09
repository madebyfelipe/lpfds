"use client";

import { useState } from "react";
import { faqs } from "@/lib/data";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section">
      <div className="site-shell">
        <div className="faq__layout">
          <div className="section-header section-header--left">
            <span className="section-kicker sr">FAQ</span>
            <h2 className="section-title sr">
              Perguntas <em>frequentes</em>
            </h2>
            <p className="section-copy sr">
              Respostas diretas, sem floreio, para você entender como funciona a parceria antes da
              conversa.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={item.question} className="faq-item sr">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    className="faq-item__button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span className="faq-item__question">{item.question}</span>
                    <span className={`faq-item__icon ${isOpen ? "faq-item__icon--open" : ""}`}>
                      +
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    className={`faq-item__content ${
                      isOpen ? "faq-item__content--open" : "faq-item__content--closed"
                    }`}
                  >
                    <div className="faq-item__contentInner">
                      <p className="faq-item__answer">{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
