"use client";

import { useEffect, useState } from "react";

/**
 * Sons de interface no padrão do Monolog: um "tap" curto (cinco variações,
 * sorteadas) ao passar o mouse em algo clicável e um "select" ao clicar.
 * Os do Monolog são arquivos do site deles; aqui são sintetizados na hora com
 * Web Audio, então não há arquivo nem requisição.
 *
 * Mesma regra do Monolog: o som começa desligado; o primeiro clique em algo
 * interativo liga, a não ser que a pessoa tenha desligado de propósito pelo
 * botão (a escolha fica em localStorage). Toque não toca o som de hover.
 */
const KEY = "mbf-sound-enabled";
const VOLUME = 0.15;
const INTERACTIVE = [
  "button",
  "a[href]",
  "input:not([type='hidden'])",
  "select",
  "textarea",
  "summary",
  "[role='button']",
  "[data-sound-interactive]"
].join(",");
const TOGGLE = "[data-sound-toggle]";

type Store = { enabled: boolean; saved: boolean | null; listeners: Set<(v: boolean) => void> };
const store: Store = { enabled: false, saved: null, listeners: new Set() };
let ctx: AudioContext | null = null;

function audio() {
  if (!ctx) {
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
  }
  if (ctx.state === "suspended") ctx.resume().catch(() => {});
  return ctx;
}

/** Clique seco: senoide curta com envelope rápido + um pouco de ruído filtrado. */
function blip(freq: number, dur: number, gain: number) {
  const ac = audio();
  if (!ac) return;
  const t = ac.currentTime;
  const out = ac.createGain();
  out.gain.setValueAtTime(0, t);
  out.gain.linearRampToValueAtTime(gain * VOLUME, t + 0.004);
  out.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  out.connect(ac.destination);

  const osc = ac.createOscillator();
  osc.type = "sine";
  osc.frequency.setValueAtTime(freq, t);
  osc.frequency.exponentialRampToValueAtTime(freq * 0.6, t + dur);
  osc.connect(out);
  osc.start(t);
  osc.stop(t + dur + 0.02);

  const len = Math.floor(ac.sampleRate * 0.012);
  const buf = ac.createBuffer(1, len, ac.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / len);
  const noise = ac.createBufferSource();
  noise.buffer = buf;
  const bp = ac.createBiquadFilter();
  bp.type = "bandpass";
  bp.frequency.value = freq * 2;
  bp.Q.value = 1.2;
  const ng = ac.createGain();
  ng.gain.value = 0.35;
  noise.connect(bp).connect(ng).connect(out);
  noise.start(t);
}

const TAPS = [1850, 2050, 2250, 1700, 2400];
const tap = () => blip(TAPS[Math.floor(Math.random() * TAPS.length)], 0.045, 0.9);
const select = () => {
  blip(1250, 0.07, 1.1);
  setTimeout(() => blip(1680, 0.08, 0.9), 45);
};

function setEnabled(v: boolean, persist: boolean) {
  store.enabled = v;
  if (persist) {
    store.saved = v;
    try {
      localStorage.setItem(KEY, String(v));
    } catch {
      /* sem storage: vale só nesta visita */
    }
  }
  store.listeners.forEach((fn) => fn(v));
}

function target(el: EventTarget | null) {
  if (!(el instanceof Element)) return null;
  const t = el.closest(`${TOGGLE},${INTERACTIVE}`);
  if (!t || t.closest("[inert], [aria-disabled='true']") || t.matches(":disabled")) return null;
  return t;
}

/** Liga os ouvintes globais; montado uma vez no layout. */
export function UiSound() {
  useEffect(() => {
    try {
      const v = localStorage.getItem(KEY);
      store.saved = v === "true" ? true : v === "false" ? false : null;
    } catch {
      store.saved = null;
    }
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onClick = (e: MouseEvent) => {
      if (!e.isTrusted) return;
      const t = target(e.target);
      if (!t) return;
      if (t.matches(TOGGLE)) {
        setEnabled(!store.enabled, true);
        if (store.enabled) select();
        return;
      }
      if (!store.enabled && store.saved !== false && !reduced) setEnabled(true, false);
      if (store.enabled) select();
    };
    const onOver = (e: PointerEvent) => {
      if (e.pointerType === "touch" || !store.enabled || document.hidden) return;
      const t = target(e.target);
      if (!t) return;
      if (e.relatedTarget instanceof Node && t.contains(e.relatedTarget)) return;
      tap();
    };
    document.addEventListener("click", onClick, true);
    document.addEventListener("pointerover", onOver, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("pointerover", onOver, true);
    };
  }, []);

  return null;
}

/** Botão de som da nav: alto-falante com ondas (ligado) ou X (desligado). */
export function SoundToggle() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    setOn(store.enabled);
    store.listeners.add(setOn);
    return () => {
      store.listeners.delete(setOn);
    };
  }, []);

  return (
    <button
      type="button"
      className="msound"
      data-sound-toggle
      aria-pressed={on}
      aria-label={on ? "Desligar sons" : "Ligar sons"}
      data-on={on || undefined}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false">
        <path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill="currentColor" stroke="none" />
        <path className="msound__wave" d="M15.5 9.2a4 4 0 0 1 0 5.6" />
        <path className="msound__wave" d="M18 7a7 7 0 0 1 0 10" />
        <path className="msound__cross" d="M15.5 9.5l5 5M20.5 9.5l-5 5" />
      </svg>
    </button>
  );
}
