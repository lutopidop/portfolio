"use client";

import type { CSSProperties } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { CircuitButtonSvg } from "./circuit-button-svg";
import styles from "./circuit-button.module.css";

type CircuitButtonProps = {
  label: string;
  href: string;
  className?: string;
  onClick?: () => void;
};

function BoltIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 63 91"
      height={91}
      width={63}
      aria-hidden
    >
      <path
        fill="black"
        d="M9.3662 51.0001H21.9999V74.8271C21.9999 77.5581 25.352 78.8687 27.2043 76.862L53.3523 48.5349C55.1262 46.6132 53.7632 43.5001 51.1479 43.5001H39.9999V18.1557C39.9999 15.427 36.6525 14.1153 34.7986 16.1175L7.16492 45.9619C5.38659 47.8824 6.74874 51.0001 9.3662 51.0001Z"
      />
      <g className="strokes">
        <path
          strokeWidth={2}
          stroke="white"
          className="stroke"
          d="M9.3662 51.0001H21.9999V74.8271C21.9999 77.5581 25.352 78.8687 27.2043 76.862L53.3523 48.5349C55.1262 46.6132 53.7632 43.5001 51.1479 43.5001H39.9999V18.1557C39.9999 15.427 36.6525 14.1153 34.7986 16.1175L7.16492 45.9619C5.38659 47.8824 6.74874 51.0001 9.3662 51.0001Z"
        />
        <path
          strokeWidth={2}
          stroke="white"
          className="stroke"
          d="M9.3662 51.0001H21.9999V74.8271C21.9999 77.5581 25.352 78.8687 27.2043 76.862L53.3523 48.5349C55.1262 46.6132 53.7632 43.5001 51.1479 43.5001H39.9999V18.1557C39.9999 15.427 36.6525 14.1153 34.7986 16.1175L7.16492 45.9619C5.38659 47.8824 6.74874 51.0001 9.3662 51.0001Z"
        />
      </g>
      <g className="lightnings">
        <path
          strokeLinecap="round"
          fill="none"
          strokeWidth={4}
          stroke="currentColor"
          className="lightning lightning-1"
          d="M16 2L4.41532 14.8856C4.30625 15.007 4.3805 15.2008 4.54271 15.2182L13.9949 16.2327C14.1573 16.2501 14.2314 16.4443 14.122 16.5655L2 30"
        />
        <path
          strokeLinecap="round"
          fill="none"
          strokeWidth={4}
          stroke="currentColor"
          className="lightning lightning-1"
          d="M61 61L49.4153 73.8856C49.3062 74.007 49.3805 74.2008 49.5427 74.2182L58.9949 75.2327C59.1573 75.2501 59.2314 75.4443 59.122 75.5655L47 89"
        />
        <g>
          <path
            strokeLinecap="round"
            fill="none"
            strokeWidth={4}
            stroke="currentColor"
            className="lightning lightning-2"
            d="M16 2L4.41532 14.8856C4.30625 15.007 4.3805 15.2008 4.54271 15.2182L13.9949 16.2327C14.1573 16.2501 14.2314 16.4443 14.122 16.5655L2 30"
          />
          <path
            strokeLinecap="round"
            fill="none"
            strokeWidth={4}
            stroke="currentColor"
            className="lightning lightning-2"
            d="M61 61L49.4153 73.8856C49.3062 74.007 49.3805 74.2008 49.5427 74.2182L58.9949 75.2327C59.1573 75.2501 59.2314 75.4443 59.122 75.5655L47 89"
          />
        </g>
      </g>
    </svg>
  );
}

function CircuitButton({ label, href, className, onClick }: CircuitButtonProps) {
  const chars = label.split("");
  const isExternal = href.startsWith("http");

  return (
    <div className={cn(styles.wrap, className)}>
      <Link
        href={href}
        className={styles.button}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        onClick={onClick}
      >
        <div className={styles.glow} aria-hidden />
        <div className={styles.bg} aria-hidden>
          <div className={styles.shine} />
        </div>
        <div className={styles.wave} aria-hidden />
        <div className={styles.inner}>
          <CircuitButtonSvg className={styles.circuit} />
          <div className={styles.wrapContent}>
            <div className={styles.content}>
              <div className={styles.outline} aria-hidden />
              <div className={styles.glyphs}>
                <span className={styles.text}>
                  {chars.map((char, index) => {
                    const display = char === " " ? "\u00A0" : char;
                    return (
                      <span
                        key={`${char}-${index}`}
                        className={styles.char}
                        data-label={display}
                        style={{ ["--i"]: index + 3 } as CSSProperties}
                      >
                        {display}
                      </span>
                    );
                  })}
                </span>
                <div className={styles.iconBolt}>
                  <BoltIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CircuitButton;
