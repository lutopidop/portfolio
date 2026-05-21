"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

import { type PortfolioProject } from "@/config/project";
import { cn } from "@/lib/utils";
import track from "@/lib/tail-track";

import styles from "./project-flip-card.module.css";

function ProjectCard({ project }: { project: PortfolioProject }) {
  const [flipped, setFlipped] = useState(false);
  const tags = [project.createdOn, ...(project.additionalTags ?? [])];

  return (
    <div
      className={cn(styles.container, flipped && styles.flipped)}
      tabIndex={0}
      role="button"
      aria-pressed={flipped}
      aria-label={`${project.name} project card. Tap, hover, or focus to flip for details.`}
      onClick={() => setFlipped((value) => !value)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setFlipped((value) => !value);
        }
      }}
    >
      <div className={styles.card}>
        <div className={styles.front}>
          <div className={styles.frontImageWrap}>
            <Image
              className={styles.frontImage}
              src={`/img/${project.image}`}
              alt={project.name}
              fill
              quality={100}
              sizes="(max-width: 640px) 90vw, (max-width: 1280px) 45vw, 30vw"
            />
          </div>
          <div className={styles.frontFooter}>
            <p className={styles.frontHeading}>{project.name}</p>
            <p className={styles.frontHint}>Tap or hover for details</p>
          </div>
        </div>

        <div className={styles.back}>
          <div>
            <p className={styles.backHeading}>{project.name}</p>
            <div className={styles.tagRow}>
              {tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <p className={styles.backDescription}>{project.description}</p>

          <p className={styles.techLine}>{project.tag}</p>

          <div className={styles.linkRow}>
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className={styles.link}
                onClick={(event) => {
                  event.stopPropagation();
                  track({ click: `${project.name}-github` });
                }}
              >
                <span>GitHub</span>
                <ArrowTopRightIcon className="size-4" />
              </Link>
            )}
            {project.live && (
              <Link
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className={styles.link}
                onClick={(event) => {
                  event.stopPropagation();
                  track({ click: `${project.name}-live` });
                }}
              >
                <span>Visit</span>
                <ArrowTopRightIcon className="size-4" />
              </Link>
            )}
            {!project.live && !project.github && (
              <span className={styles.tag}>Private / internal app</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
