"use client";

import { useEffect, useRef } from "react";
import styles from "./WeldingSparks.module.css";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
};

export default function WeldingSparks({ density = 1 }: { density?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      if (!parent || !canvas) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(parent);

    let particles: Particle[] = [];
    const maxParticles = Math.round(26 * density);
    const gravity = 0.05;

    function spawnParticle() {
      // Sparks originate anywhere in the lower two-thirds of the section so
      // tall sections still show activity inside the viewport, not just at
      // their very bottom edge.
      const x = Math.random() * width;
      const y = height - Math.random() * height * 0.6;
      const speed = 2.2 + Math.random() * 3.4;
      // Mostly straight up with a wide-ish cone, like sparks kicked off a weld.
      const angle = -Math.PI / 2 + (Math.random() - 0.5) * 1.1;
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 0,
        maxLife: 40 + Math.random() * 50,
        size: Math.random() < 0.3 ? 2.4 : 1.6,
      });
    }

    function spawnBurst(x: number, y: number) {
      const count = 2 + Math.floor(Math.random() * 3);
      for (let i = 0; i < count; i++) {
        const speed = 1 + Math.random() * 2.2;
        const angle = Math.random() * Math.PI * 2;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.4,
          life: 0,
          maxLife: 12 + Math.random() * 14,
          size: 1.2,
        });
      }
    }

    let raf = 0;
    let frame = 0;

    function tick() {
      frame++;
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      if (frame % 3 === 0 && particles.length < maxParticles) spawnParticle();

      const next: Particle[] = [];
      for (const p of particles) {
        if (p.life >= p.maxLife || p.y < -20) continue;

        p.vy += gravity;
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        const t = p.life / p.maxLife;
        const alpha = t < 0.12 ? t / 0.12 : 1 - (t - 0.12) / 0.88;
        const a = Math.max(0, Math.min(1, alpha));

        if (a > 0.05) {
          // Trail is a fixed multiple of the velocity vector, not the
          // per-frame delta — otherwise at ~60fps each spark only moves a
          // couple of px/frame and reads as a dot instead of a streak.
          const speed = Math.hypot(p.vx, p.vy) || 0.001;
          const trailLen = 9 + p.size * 6;
          const tx = p.x - (p.vx / speed) * trailLen;
          const ty = p.y - (p.vy / speed) * trailLen;

          const grad = ctx.createLinearGradient(tx, ty, p.x, p.y);
          grad.addColorStop(0, "rgba(255,90,40,0)");
          grad.addColorStop(0.55, `rgba(255,156,72,${a * 0.9})`);
          grad.addColorStop(1, `rgba(255,246,220,${a})`);

          ctx.strokeStyle = grad;
          ctx.lineWidth = p.size;
          ctx.lineCap = "round";
          ctx.shadowColor = `rgba(255,140,60,${a * 0.8})`;
          ctx.shadowBlur = 7;
          ctx.beginPath();
          ctx.moveTo(tx, ty);
          ctx.lineTo(p.x, p.y);
          ctx.stroke();

          // hot tip
          ctx.shadowBlur = 0;
          ctx.fillStyle = `rgba(255,250,235,${a})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 0.8, 0, Math.PI * 2);
          ctx.fill();
        }

        // occasional crackle: a spark pops into a couple of tiny embers near its peak
        if (p.vy > -0.15 && p.vy < 0.15 && Math.random() < 0.06 && particles.length + next.length < maxParticles + 8) {
          spawnBurst(p.x, p.y);
        }

        next.push(p);
      }
      particles = next;

      raf = requestAnimationFrame(tick);
    }

    if (!prefersReduced) {
      raf = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [density]);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
}
