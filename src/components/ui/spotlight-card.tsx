"use client";

import React, { useEffect, useRef, type ReactNode, type CSSProperties } from "react";
import "./spotlight-card.css";

export type GlowCardProps = {
  children?: ReactNode;
  className?: string;
  /** Color del brillo del borde (default: naranja brand) */
  glowColor?: string;
  style?: CSSProperties;
};

/**
 * Card con spotlight en el borde al mover el cursor cerca.
 * Sin box-shadow pesada: solo trazo de color en el borde (como un botón limpio).
 */
export function GlowCard({
  children,
  className = "",
  glowColor = "255, 138, 30",
  style,
}: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      el.style.setProperty("--glow-x", `${x}px`);
      el.style.setProperty("--glow-y", `${y}px`);
      el.style.setProperty("--glow-opacity", "1");
    };

    const onLeave = () => {
      el.style.setProperty("--glow-opacity", "0");
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`glow-card ${className}`.trim()}
      style={
        {
          ...style,
          ["--glow-rgb" as string]: glowColor,
        } as CSSProperties
      }
    >
      <div className="glow-card__border" aria-hidden />
      <div className="glow-card__body">{children}</div>
    </div>
  );
}

export default GlowCard;
