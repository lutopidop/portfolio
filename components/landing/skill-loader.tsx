import type { CSSProperties } from "react";

import styles from "./skill-loader.module.css";

type SkillLoaderProps = {
  letter: string;
  delay?: number;
};

function SkillLoader({ letter, delay = 0 }: SkillLoaderProps) {
  const char = letter.charAt(0).toUpperCase();

  return (
    <div
      className={styles.loader}
      style={{ ["--delay" as string]: `${delay}s` } as CSSProperties}
      aria-hidden
    >
      <svg className={styles.svg} viewBox="0 0 80 80">
        <rect className={styles.rect} x={8} y={8} width={64} height={64} />
        <text
          className={styles.letter}
          x="50%"
          y="60%"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {char}
        </text>
      </svg>
    </div>
  );
}

export default SkillLoader;
