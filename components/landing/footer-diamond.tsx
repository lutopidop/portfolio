"use client";

import styles from "./footer-diamond.module.css";

const TRACKER_CLASSES = [
  styles.tr1,
  styles.tr2,
  styles.tr3,
  styles.tr4,
  styles.tr5,
  styles.tr6,
  styles.tr7,
  styles.tr8,
  styles.tr9,
  styles.tr10,
  styles.tr11,
  styles.tr12,
  styles.tr13,
  styles.tr14,
  styles.tr15,
  styles.tr16,
  styles.tr17,
  styles.tr18,
  styles.tr19,
  styles.tr20,
  styles.tr21,
  styles.tr22,
  styles.tr23,
  styles.tr24,
  styles.tr25,
] as const;

function FooterDiamond() {
  return (
    <div className={styles.root} aria-hidden>
      <div className={styles.bg}>
        {TRACKER_CLASSES.map((trackerClass, index) => (
          <div key={index} className={`${styles.tracker} ${trackerClass}`} />
        ))}

        <div className={styles.glowBackground} />

        <div className={styles.particles}>
          <div className={`${styles.dust} ${styles.d1}`} />
          <div className={`${styles.dust} ${styles.d2}`} />
          <div className={`${styles.dust} ${styles.d3}`} />
        </div>

        <div className={styles.stage}>
          <div className={styles.scene}>
            <div className={styles.bobWrapper}>
              <div className={styles.diamond}>
                <div className={`${styles.facet} ${styles.tableFacet}`} />
                <div className={`${styles.facet} ${styles.crown} ${styles.c1}`} />
                <div className={`${styles.facet} ${styles.crown} ${styles.c2}`} />
                <div className={`${styles.facet} ${styles.crown} ${styles.c3}`} />
                <div className={`${styles.facet} ${styles.crown} ${styles.c4}`} />
                <div className={`${styles.facet} ${styles.crown} ${styles.c5}`} />
                <div className={`${styles.facet} ${styles.crown} ${styles.c6}`} />
                <div className={`${styles.facet} ${styles.crown} ${styles.c7}`} />
                <div className={`${styles.facet} ${styles.crown} ${styles.c8}`} />
                <div className={`${styles.facet} ${styles.pavilion} ${styles.p1}`} />
                <div className={`${styles.facet} ${styles.pavilion} ${styles.p2}`} />
                <div className={`${styles.facet} ${styles.pavilion} ${styles.p3}`} />
                <div className={`${styles.facet} ${styles.pavilion} ${styles.p4}`} />
                <div className={`${styles.facet} ${styles.pavilion} ${styles.p5}`} />
                <div className={`${styles.facet} ${styles.pavilion} ${styles.p6}`} />
                <div className={`${styles.facet} ${styles.pavilion} ${styles.p7}`} />
                <div className={`${styles.facet} ${styles.pavilion} ${styles.p8}`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterDiamond;
