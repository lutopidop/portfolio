"use client";

import TECH from "@/config/tech";
import { useNavSection } from "@/hooks/use-nav-section";
import StaggerText from "@/ui/staggerText";

import SkillLoader from "./skill-loader";
import styles from "./tech-section.module.css";

function Tech() {
  const { ref } = useNavSection("Skills", {
    threshold: 0.5,
    freezeOnceVisible: false,
  });

  return (
    <section
      className="container flex flex-col px-6 pb-24 pt-48 md:px-12"
      id="skills"
      ref={ref}
    >
      <StaggerText text="Skills" className="text-heading mb-10 font-medium" />

      <div className="mb-6 max-w-2xl">
        <p className="text-para-sm text-slate-400/90">
          Shopify, full-stack development, and AI engineering — organized by
          focus area.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
        {TECH.map((category) => (
          <article key={category.id} className={styles.categoryCard}>
            <header className={styles.categoryHeader}>
              <h3 className={styles.categoryTitle}>{category.name}</h3>
              <span className={styles.categoryCount}>
                {category.techs.length} skills
              </span>
            </header>

            <ul className={styles.skillGrid}>
              {category.techs.map((skill, index) => (
                <li key={skill} className={styles.skillItem}>
                  <SkillLoader letter={skill} delay={index * 0.15} />
                  <span className={styles.skillLabel}>{skill}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Tech;
