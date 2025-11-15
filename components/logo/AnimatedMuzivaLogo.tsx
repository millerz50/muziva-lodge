// app/components/logo/AnimatedMuzivaLogo.tsx
"use client";

import React, { useEffect, useState } from "react";

/**
 * AnimatedMuzivaLogo (React.FC)
 * - Two palms behind a bold M
 * - Palms darkened and outlined for contrast against the warm gradient
 * - Subtle phase-offset sway for realism
 * - Fade-in on mount + optional 10s splash overlay (handled by parent if needed)
 * - MUZIVA and LODGE rendered the same size for parity
 */
const AnimatedMuzivaLogo: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`w-full max-w-[800px] mx-auto transition-opacity duration-700 ease-out ${
        mounted ? "opacity-100" : "opacity-0"
      }`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 400"
        role="img"
        aria-labelledby="title desc"
        className="w-full h-auto">
        <title id="title">Muziva Lodge Logo</title>
        <desc id="desc">
          Warm desert gradient, bold black M, and two palms behind the M with
          subtle sway. Palms darkened and outlined for contrast.
        </desc>

        <style>{`
          /* Palm sway: subtle phase-offset motion */
          .palm-sway-left,
          .palm-sway-right {
            animation: palmSway 3.6s ease-in-out infinite;
            transform-box: fill-box;
          }
          .palm-sway-left { transform-origin: 200px 150px; animation-delay: 0.45s; }
          .palm-sway-right { transform-origin: 292px 146px; animation-delay: 0.9s; }

          @keyframes palmSway {
            0%   { transform: rotate(0deg); }
            18%  { transform: rotate(1.6deg); }
            50%  { transform: rotate(-1.4deg); }
            82%  { transform: rotate(1.0deg); }
            100% { transform: rotate(0deg); }
          }

          .fade-in { opacity: 0; animation: fadeIn 700ms ease-out forwards; }
          @keyframes fadeIn { to { opacity: 1; } }
        `}</style>

        <defs>
          {/* Slightly muted, less saturated gradient so orange palms stand out */}
          <linearGradient id="desertGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f7b04a" />
            <stop offset="55%" stopColor="#ee8a2a" />
            <stop offset="100%" stopColor="#7a3a18" />
          </linearGradient>

          {/* subtle drop shadow for palms / M to lift them from background */}
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="6"
              stdDeviation="8"
              floodColor="#000"
              floodOpacity="0.18"
            />
          </filter>
        </defs>

        {/* Background */}
        <rect x="0" y="0" width="800" height="400" fill="url(#desertGrad)" />

        {/* Dunes */}
        <path
          d="M0,310 C140,290 280,330 420,310 C560,290 700,330 800,310 L800,400 L0,400 Z"
          fill="rgba(255,255,255,0.06)"
          className="fade-in"
        />
        <path
          d="M0,340 C160,320 320,360 480,340 C640,320 720,360 800,340 L800,400 L0,400 Z"
          fill="rgba(0,0,0,0.10)"
          className="fade-in"
          style={{ animationDelay: "120ms" }}
        />

        {/* Cluster: palms + M + wordmark */}
        <g transform="translate(120,40)" filter="url(#softShadow)">
          {/* Left palm (sits behind left side of M) */}
          <g className="palm-sway-left" transform="translate(28,0)">
            {/* trunk (darker orange with subtle black outline) */}
            <path
              d="M170,150 C168,188 166,222 165,256 C165,268 170,272 175,272 C180,272 184,269 184,256 C184,222 182,188 180,150"
              fill="#d75a19"
              stroke="#121212"
              strokeOpacity="0.18"
              strokeWidth={1}
            />
            {/* fronds (darker orange strokes for contrast) */}
            <path
              d="M170,150 C148,132 128,122 110,118 C125,134 145,147 164,153"
              fill="none"
              stroke="#ff8a3b"
              strokeWidth={5}
              strokeLinecap="round"
            />
            <path
              d="M170,150 C148,144 128,154 110,162 C126,167 145,170 164,168"
              fill="none"
              stroke="#ff8a3b"
              strokeWidth={5}
              strokeLinecap="round"
            />
            <path
              d="M170,150 C160,132 154,120 150,108 C158,112 166,120 172,126"
              fill="none"
              stroke="#ff8a3b"
              strokeWidth={5}
              strokeLinecap="round"
            />
          </g>

          {/* Right palm (sits behind right side of M) */}
          <g className="palm-sway-right" transform="translate(160,-6)">
            <path
              d="M285,145 C283,186 281,222 280,256 C280,268 285,272 290,272 C295,272 299,269 299,256 C299,222 297,186 295,145"
              fill="#d75a19"
              stroke="#121212"
              strokeOpacity="0.18"
              strokeWidth={1}
            />
            <path
              d="M285,145 C306,128 330,118 350,114 C336,132 316,145 296,151"
              fill="none"
              stroke="#ff8a3b"
              strokeWidth={5}
              strokeLinecap="round"
            />
            <path
              d="M285,145 C306,140 330,150 350,160 C334,166 316,169 296,167"
              fill="none"
              stroke="#ff8a3b"
              strokeWidth={5}
              strokeLinecap="round"
            />
            <path
              d="M285,145 C294,128 300,116 304,104 C296,108 288,116 282,124"
              fill="none"
              stroke="#ff8a3b"
              strokeWidth={5}
              strokeLinecap="round"
            />
          </g>

          {/* Clean geometric M (center front) */}
          <g transform="translate(220,100)">
            <path
              d="M0,160 L0,12 L28,12 L56,88 L84,12 L112,12 L112,160 L84,160 L84,64 L56,124 L42,124 L14,64 L14,160 Z"
              fill="#0b0b0b"
            />
            {/* accent bar under M */}
            <rect
              x="-36"
              y="176"
              width="208"
              height="8"
              rx="4"
              fill="#e86b2a"
            />
          </g>

          {/* Wordmark below M (same size for both lines) */}
          <g transform="translate(210,245)">
            <text
              x="0"
              y="0"
              fontFamily="Inter, system-ui, Arial"
              fontWeight={700}
              fontSize={36}
              fill="#0b0b0b"
              letterSpacing={1.5}>
              MUZIVA
            </text>
            <text
              x="0"
              y="44"
              fontFamily="Inter, system-ui, Arial"
              fontWeight={700}
              fontSize={36}
              fill="#0b0b0b"
              letterSpacing={1.5}>
              LODGE
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default AnimatedMuzivaLogo;
