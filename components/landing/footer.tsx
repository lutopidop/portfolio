"use client";

import type { MotionValue } from "framer-motion";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

import StaggerText from "@/ui/staggerText";
import { useNavSection } from "@/hooks/use-nav-section";
import { useLgUp } from "@/hooks/use-lg-up";
import { useMounted } from "@/hooks/use-mounted";
import { useThrottle } from "@/hooks/useThrottle";

import FooterDiamond from "@/components/landing/footer-diamond";
import SocialGlassIcons from "@/components/landing/social-glass-icons";

type MotionNumber = MotionValue<number>;

function Footer() {
  const mounted = useMounted();
  const lgUp = useLgUp();
  const orbParallax = mounted && lgUp;

  const sections = [
    {
      name: "Home",
      describe: "Homepage of my portfolio.",
      href: "#home",
    },
    {
      name: "Projects",
      describe:
        "Shopify stores and apps I have built and customized for global brands.",
      href: "#projects",
    },
    {
      name: "Skills",
      describe: "Shopify, full-stack development, and AI engineering skills.",
      href: "#skills",
    },
    {
      name: "Resume",
      describe: "Work experience, resume, and reference letter.",
      href: "#resume",
    },
  ];

  const { ref } = useNavSection("Contact", { threshold: 0.5 });

  const footerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const translateY = useTransform(
    scrollYProgress,
    [0, 1],
    [-100, (footerRef?.current?.clientHeight ?? 900) - 150]
  );
  const throttleY = useThrottle<MotionNumber>(translateY, 200);

  return (
    <>
      <div className="relative">
        <motion.div
          style={
            orbParallax
              ? {
                  translateY: throttleY,
                  left: "50%",
                  translateX: "-50%",
                  scale,
                }
              : undefined
          }
          className="absolute top-0 z-10 hidden lg:block h-[min(460px,20vw)] w-[min(460px,20vw)] -translate-x-1/2"
        >
          <FooterDiamond />
        </motion.div>
      </div>
      <footer
        ref={footerRef}
        id="contact"
        className="container px-6 md:px-12 py-10 min-h-0 md:min-h-[95vh] border-t-[0.5px] border-white/20 flex items-start md:items-center relative overflow-x-hidden overflow-y-visible flex-col md:flex-row gap-8 md:gap-6 mb-5 md:mb-0"
      >
        <motion.div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_95%_15%,#6533ee75,transparent)] -z-10" />
        <motion.div className="flex-[2_2_0%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-12 xl:gap-16 z-20">
          {sections.map((it) => (
            <motion.div
              key={it.name}
              className="group cursor-pointer"
              onClick={() =>
                it.href &&
                document
                  ?.querySelector(it.href)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <h3 className="relative w-fit text-para transition-colors group-hover:text-yellow-400 mb-2 after:bg-yellow-400 after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 group-hover:after:w-full after:transition-all after:duration-500 duration-500">
                {it.name}
              </h3>
              <p className="text-para-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                {it.describe}
              </p>
            </motion.div>
          ))}
        </motion.div>
        <div ref={ref} />
        <motion.div className="flex w-full min-w-0 flex-col flex-1 gap-6 md:gap-10">
          <StaggerText
            text="Lets connect."
            className="text-heading font-medium w-full max-w-md leading-[80%]"
          />
          <motion.div>
            <p className="opacity-60">Email at: </p>
            <Link href="mailto:luopidkkop@gmail.com">
              <p className="text-para-sm opacity-60 cursor-pointer break-all">
                luopidkkop@gmail.com
              </p>
            </Link>
          </motion.div>
          <div className="w-full overflow-visible pt-2 pb-8 md:pb-16">
            <SocialGlassIcons />
          </div>
        </motion.div>
        
      </footer>
      <motion.div
        className="hidden lg:block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
          hidden: { opacity: 0 },
        }}
      >
        <motion.div className="min-h-56 grid place-content-center">
          <p className="text-yellow-400 text-para-sm">
            Portfolio of Jing An Lam - Shopify App & Theme Developer
          </p>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Footer;
