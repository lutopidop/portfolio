"use client";

import type { MotionValue } from "framer-motion";
import { motion, useScroll, useTransform } from "framer-motion";

import { useNavSection } from "@/hooks/use-nav-section";
import { useLgUp } from "@/hooks/use-lg-up";
import { useMounted } from "@/hooks/use-mounted";
import { useParallaxEnabled } from "@/hooks/use-parallax-enabled";
import { useThrottle } from "@/hooks/useThrottle";
import { Particles } from "@/components/particles";

import HeroStatsCard from "./hero-stats-card";
import HeroWeatherCard from "./hero-weather-card";
import styles from "./hero.module.css";

type MotionNumber = MotionValue<number>;

function Hero() {
  const parallax = useParallaxEnabled();
  const lgUp = useLgUp();
  const mounted = useMounted();
  const showSideColumn = mounted && lgUp;

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, -0.5]);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 7750]);
  const throttleY = useThrottle<MotionNumber>(translateY, 200);
  const throttleScale = useThrottle<MotionNumber>(scale, 200);

  const { ref } = useNavSection("Home", {
    threshold: 0.5,
    initialIsIntersecting: true,
  });

  const heroContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.28 },
    },
  };

  const heroItem = {
    hidden: { opacity: 0, translateY: -36 },
    show: {
      opacity: 1,
      translateY: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="overflow-hidden" id="home" ref={ref}>
      <div className="relative w-full max-w-[100vw] overflow-x-hidden">
        <motion.div
          style={parallax ? { translateY: throttleY } : undefined}
          className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(135%_125%_at_50%_10%,#020817_40%,#63e_100%)] will-change-transform"
        />
        <Particles className="absolute inset-0 -z-10" quantity={70} />
        <motion.div
          style={
            parallax
              ? { scale: throttleScale, translateY: throttleY }
              : undefined
          }
          className="will-change-transform"
        >
          <div className={styles.shell}>
            {showSideColumn && (
              <aside className={styles.sideColumn} aria-label="Hero widgets">
                <HeroWeatherCard />
                <HeroStatsCard />
              </aside>
            )}

            <motion.div
              variants={heroContainer}
              initial="hidden"
              animate="show"
              className={styles.mainColumn}
            >
              <div className={styles.headlineBlock}>
                <motion.h1
                  variants={heroItem}
                  className="text-center text-hero font-semibold leading-[105%] w-full"
                >
                  Hello there, <br /> I am{" "}
                  <span className="bg-gradient-to-b from-white to-slate-300 bg-clip-text text-transparent">
                    Jing An Lam
                  </span>
                </motion.h1>
                <motion.p
                  variants={heroItem}
                  className="text-para text-center opacity-80 w-full"
                >
                  林静安 · Shopify app & theme developer building e-commerce
                  experiences and AI-powered solutions.
                </motion.p>
              </div>

              {mounted && !lgUp && (
                <div className={styles.mobileWidgets} aria-label="Hero stats">
                  <HeroStatsCard />
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
