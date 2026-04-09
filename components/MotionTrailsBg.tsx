"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  trail: { x: number; y: number }[];
  size: number;
  speed: number;
  hue: number;
}

const TRAIL_LENGTH = 22;
const PARTICLE_COUNT = 7;

function createParticle(w: number, h: number): Particle {
  const angle = Math.random() * Math.PI * 2;
  const speed = 0.5 + Math.random() * 0.9;
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    trail: [],
    size: 1.2 + Math.random() * 1.6,
    speed,
    hue: Math.random() * 28,
  };
}

export function MotionTrailsBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let paused = false;
    let particles: Particle[] = [];

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      particles = Array.from({ length: PARTICLE_COUNT }, () =>
        createParticle(canvas.width, canvas.height)
      );
    }

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let running = false;
    function stop() { cancelAnimationFrame(animId); running = false; }
    function start() { if (!running) { running = true; draw(); } }

    // Pause when tab hidden or element off-screen
    const io = new IntersectionObserver(
      ([entry]) => { entry.isIntersecting ? start() : stop(); },
      { threshold: 0 }
    );
    io.observe(canvas);

    function onVisibility() { document.hidden ? stop() : start(); }
    document.addEventListener("visibilitychange", onVisibility);

    function draw() {
      animId = requestAnimationFrame(draw);
      if (!canvas || !ctx) return;

      const w = canvas.width;
      const h = canvas.height;

      ctx.fillStyle = "rgba(10, 10, 10, 0.22)";
      ctx.fillRect(0, 0, w, h);

      ctx.shadowBlur = 0;

      for (const p of particles) {
        p.trail.push({ x: p.x, y: p.y });
        if (p.trail.length > TRAIL_LENGTH) p.trail.shift();

        p.x += p.vx;
        p.y += p.vy;
        p.vx += (Math.random() - 0.5) * 0.035;
        p.vy += (Math.random() - 0.5) * 0.035;

        const spd = Math.hypot(p.vx, p.vy);
        if (spd > p.speed * 1.5) {
          p.vx = (p.vx / spd) * p.speed * 1.5;
          p.vy = (p.vy / spd) * p.speed * 1.5;
        }

        if (p.x < -20) { p.x = w + 20; p.trail = []; }
        if (p.x > w + 20) { p.x = -20; p.trail = []; }
        if (p.y < -20) { p.y = h + 20; p.trail = []; }
        if (p.y > h + 20) { p.y = -20; p.trail = []; }

        if (p.trail.length < 2) continue;

        // Draw entire trail as one path (much cheaper than per-segment)
        ctx.beginPath();
        ctx.moveTo(p.trail[0].x, p.trail[0].y);
        for (let i = 1; i < p.trail.length; i++) {
          ctx.lineTo(p.trail[i].x, p.trail[i].y);
        }
        const t = p.trail.length / TRAIL_LENGTH;
        ctx.strokeStyle = `hsla(${p.hue}, 88%, 60%, ${t * 0.55})`;
        ctx.lineWidth = p.size * t;
        ctx.lineCap = "round";
        ctx.stroke();
      }
    }

    start();

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="services__trails-canvas"
      aria-hidden="true"
    />
  );
}
