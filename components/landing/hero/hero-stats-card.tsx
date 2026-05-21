"use client";

import type { CSSProperties } from "react";
import { TrendingUp } from "lucide-react";

import styles from "./hero-stats-card.module.css";

const HOVER_ZONES = 15;
const CHART_ID = "hero-stats-chart";

const GRID_LINES = [
  { y: 132, opacity: 0.5, i: 1 },
  { y: 100, opacity: 0.55, i: 2 },
  { y: 68, opacity: 0.6, i: 3 },
  { y: 36, opacity: 0.65, i: 4 },
  { y: 8, opacity: 0.7, i: 5 },
] as const;

function HeroStatsCard() {
  return (
    <div className={styles.root} aria-label="Portfolio project stats">
      <div className={styles.grid}>
        {Array.from({ length: HOVER_ZONES }, (_, i) => (
          <div key={i} className={styles.area} aria-hidden />
        ))}

        <div className={styles.wrap}>
          <div className={styles.card}>
            <div className={styles.glowOut} />
            <div className={styles.glowIn} />
            <div className={styles.cardBg} />
            <div className={styles.cardContent}>
              <div className={styles.glare} />
              <header className={styles.header}>
                <p className={styles.title}>Shopify projects</p>
                <p className={styles.metric}>+80</p>
                <span className={styles.iconBadge} aria-hidden>
                  <TrendingUp size={20} />
                </span>
              </header>

              <div className={styles.chart}>
                <svg
                  viewBox="0 0 389 145"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <defs>
                    <linearGradient
                      id={`${CHART_ID}-a`}
                      x1="0%"
                      x2="100%"
                      y1="0%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#fbbf24" />
                      <stop offset="35%" stopColor="#f97316" />
                      <stop offset="70%" stopColor="#a78bfa" />
                      <stop offset="100%" stopColor="#f472b6" />
                    </linearGradient>
                    <linearGradient
                      id={`${CHART_ID}-b`}
                      x1="0%"
                      x2="100%"
                      y1="0%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#4c1d95" />
                      <stop offset="50%" stopColor="#7c3aed" />
                      <stop offset="100%" stopColor="#312e81" />
                    </linearGradient>
                    <filter id={`${CHART_ID}-goo`}>
                      <feGaussianBlur
                        in="SourceGraphic"
                        stdDeviation="2"
                        result="blur"
                      />
                      <feColorMatrix
                        in="blur"
                        mode="matrix"
                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                        result="goo"
                      />
                    </filter>
                  </defs>

                  {GRID_LINES.map((line) => (
                    <line
                      key={line.i}
                      className={styles.gridLine}
                      style={{ "--i": line.i } as CSSProperties}
                      x1={3}
                      y1={line.y}
                      x2={389}
                      y2={line.y}
                      strokeOpacity={line.opacity}
                    />
                  ))}

                  <g filter={`url(#${CHART_ID}-goo)`}>
                    <path
                      className={styles.chartLine}
                      d="M5.5 138C22 88 48 52 95 42C142 32 178 108 218 98C258 88 278 38 328 32C352 28 368 26 382 18"
                      stroke={`url(#${CHART_ID}-a)`}
                      strokeWidth={10}
                    />
                    <path
                      className={`${styles.chartLine} ${styles.chartLineSecondary}`}
                      d="M18 8C52 62 88 108 128 102C168 96 192 48 232 38C272 28 292 54 332 52C348 50 362 48 374 42"
                      stroke={`url(#${CHART_ID}-b)`}
                      strokeWidth={9}
                    />
                  </g>
                </svg>
              </div>

              <footer className={styles.footer}>
                <span>Apps</span>
                <span>Themes</span>
                <span>Stores</span>
                <span>AI</span>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroStatsCard;
