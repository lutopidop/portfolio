"use client";

import { motion } from "framer-motion";

import { experience } from "@/config/experience";
import { cn } from "@/lib/utils";

import jobStyles from "./experience-job-card.module.css";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function initials(company: string) {
  return company
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
}

function ExperienceRoadmap({ className }: { className?: string }) {
  return (
    <div className={cn("w-full max-w-3xl mx-auto", className)}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center md:text-left"
      >
        <p className="text-yellow-400 text-sm uppercase tracking-[0.2em] mb-2">
          Career path
        </p>
        <h3 className="text-heading font-medium leading-tight">
          Experience Journey
        </h3>
      </motion.div>

      <motion.ol
        className="relative space-y-6 md:space-y-8"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <motion.div
          aria-hidden
          className="absolute left-[15px] md:left-[19px] top-4 bottom-4 w-px bg-gradient-to-b from-yellow-400/80 via-indigo-400/50 to-transparent"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "top" }}
        />

        {experience.map((role, index) => (
          <motion.li
            key={`${role.company}-${role.date}`}
            variants={item}
            className="relative grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr] gap-4 md:gap-6"
          >
            <div className="relative z-10 flex justify-center pt-6">
              <span
                className={cn(
                  "size-3.5 md:size-4 rounded-full border-2 border-yellow-400 bg-[#020817]",
                  index === 0 && "shadow-[0_0_12px_rgba(250,204,21,0.6)]"
                )}
              />
            </div>

            <article className={jobStyles.card}>
              <span className={jobStyles.strip} aria-hidden />
              <header className={jobStyles.header}>
                <div className={jobStyles.companyRow}>
                  <span className={jobStyles.avatar}>
                    {initials(role.company)}
                  </span>
                  <h4 className={jobStyles.company}>{role.company}</h4>
                </div>
                <span className={jobStyles.date}>{role.date}</span>
              </header>
              <div className={jobStyles.body}>
                <p className={jobStyles.title}>{role.title}</p>
                <ul className={jobStyles.points}>
                  {role.points.map((point) => (
                    <li key={point} className={jobStyles.point}>
                      <span className={jobStyles.bullet} aria-hidden />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </motion.li>
        ))}
      </motion.ol>
    </div>
  );
}

export default ExperienceRoadmap;
