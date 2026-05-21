"use client";

import { NAV_ITEMS, useNav } from "@/context/nav-context";

import styles from "./sticky-nav.module.css";

function StickyNav() {
  const { handleCurrentNav, currentIdx } = useNav();

  const scrollTo = (item: (typeof NAV_ITEMS)[number]) => {
    handleCurrentNav(item);
    document
      .querySelector(`#${item.toLowerCase()}`)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <div className={styles.glowShell}>
        <div className={styles.shellBg} aria-hidden />
        <div className={styles.glow} aria-hidden />
        <div className={styles.darkBorderBg} aria-hidden />
        <div className={styles.border} aria-hidden />
        <div className={styles.white} aria-hidden />

        <ul className={styles.radioInputs}>
          {NAV_ITEMS.map((item, idx) => (
            <li key={item} className={styles.radio}>
              <button
                type="button"
                className={`${styles.radioBtn} ${
                  currentIdx === idx ? styles.radioBtnActive : ""
                }`}
                onClick={() => scrollTo(item)}
                aria-current={currentIdx === idx ? "page" : undefined}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default StickyNav;
