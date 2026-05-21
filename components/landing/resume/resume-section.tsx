"use client";

import CircuitButton from "@/components/ui/circuit-button";
import ExperienceRoadmap from "./experience-roadmap";
import { useNavSection } from "@/hooks/use-nav-section";
import track from "@/lib/tail-track";

const RESUME_DRIVE_URL =
  "https://drive.google.com/file/d/1amj_Rg8vxYej1qtZpd36NAkh-TD6JWvD/view?usp=sharing";
const REFERENCE_URL =
  "https://drive.google.com/file/d/1aMAcUfO2M1ReboMvl9K7T9A9iv1PdajK/view?usp=sharing";

function ResumeSection() {
  const { ref } = useNavSection("Resume", {
    threshold: 0.5,
    freezeOnceVisible: false,
  });

  return (
    <section
      className="relative pt-[10vh] pb-[20vh] md:pt-[25vh] md:pb-[50vh]"
      id="resume"
      ref={ref}
    >
      <div className="hidden md:absolute inset-0 bg-[radial-gradient(circle_300px_at_60%_30%,#465bfa9a,transparent)] -z-10" />
      <div className="hidden md:absolute inset-0 bg-[radial-gradient(circle_400px_at_40%_50%,#6533ee75,transparent)] -z-10" />

      <div className="mx-6 flex max-w-4xl flex-col gap-12 md:mx-auto md:gap-16">
        <ExperienceRoadmap className="w-full" />

        <div className="grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-3">
          <CircuitButton
            label="View Resume"
            href={RESUME_DRIVE_URL}
            onClick={() => track({ click: "resume" })}
          />
          <CircuitButton
            label="Download PDF"
            href="/resume.pdf"
            onClick={() => track({ click: "resume-pdf" })}
          />
          <CircuitButton
            label="Reference Letter"
            href={REFERENCE_URL}
            className="sm:col-span-2 lg:col-span-1"
            onClick={() => track({ click: "reference" })}
          />
        </div>
      </div>
    </section>
  );
}

export default ResumeSection;
