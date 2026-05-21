"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import { projects } from "@/config/project";
import CircuitButton from "@/components/ui/circuit-button";
import StaggerText from "@/ui/staggerText";
import RevealBox from "@/ui/revealBox";
import ProjectCard from "./proejectCard";
import { useNavSection } from "@/hooks/use-nav-section";
import { useParallaxEnabled } from "@/hooks/use-parallax-enabled";

export default function Projects() {
  const parallax = useParallaxEnabled();
  const { scrollYProgress } = useScroll();
  const translateX = useTransform(scrollYProgress, [0, 1], [-1000, 1000]);
  const { ref } = useNavSection("Projects", { threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      className="border-t-[0.5px] border-white/20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="overflow-hidden whitespace-nowrap px-2 my-4 select-none"
        style={parallax ? { translateX } : undefined}
      >
        {Array(40)
          .fill("Show case")
          .map((it, idx) => (
            <span
              key={idx}
              aria-disabled
              className="text-para-sm opacity-40 mr-4 uppercase"
            >
              {it}{" "}
            </span>
          ))}
      </motion.div>

      <section
        id="projects"
        className="relative px-5 pb-16 md:px-8 md:pb-24 lg:px-12"
      >
        <motion.div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_300px_at_5%_30%,#3e3e3e,transparent)]"
          aria-hidden
        ></motion.div>
        <motion.div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:16px_16px]"
          aria-hidden
        ></motion.div>
        <motion.div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_320px_at_90%_65%,#3e3e3e76,transparent)]"
          aria-hidden
        ></motion.div>

        <motion.div
          className="relative z-10 mx-auto w-full max-w-[1600px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: 0.05 }}
        >
          <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <StaggerText
                className="text-heading font-medium mb-4"
                text="Projects"
              />
              <RevealBox>
                <p className="max-w-xl text-para-sm opacity-80">
                  {projects.length} Shopify stores and apps I have built and
                  customized for global brands.
                </p>
              </RevealBox>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <CircuitButton
                label="Contact me"
                href="#contact"
                className="!max-w-[320px] shrink-0"
              />
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3 xl:gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.06 },
              },
            }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="min-h-[min(420px,52vh)] sm:min-h-[380px] lg:min-h-[400px]"
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.45, ease: "easeOut" },
                  },
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  );
}
