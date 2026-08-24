"use client";

import { useRef, useState, type CSSProperties, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/lib/projects.data";

const TAG_COLORS = ["text-cyan", "text-amber", "text-magenta", "text-rose"];

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<CSSProperties>({});

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setStyle({
      transform: `perspective(900px) rotateX(${py * -6}deg) rotateY(${
        px * 6
      }deg) translateY(-4px)`,
    });
  };

  const handleLeave = () => {
    setStyle({
      transform:
        "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)",
    });
  };

  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      style={style}
      data-cursor="hover"
      className="group relative rounded-lg border border-border bg-bg-elevated p-6 transition-[border-color,box-shadow] duration-300 ease-out will-change-transform hover:border-border-bright hover:shadow-[0_20px_60px_-20px_rgba(125,211,192,0.15)] sm:p-8"
    >
      <div className="mb-4 flex items-start justify-between">
         <span className="font-mono text-xs text-fg-faint">{/*// */}{num}</span> 
        <div className="flex gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} GitHub 저장소 열기`}
              className="text-fg-dim transition-colors hover:text-cyan"
            >
              <Github size={18} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} 라이브 데모 열기`}
              className="text-fg-dim transition-colors hover:text-cyan"
            >
              <ArrowUpRight size={18} />
            </a>
          )}
        </div>
      </div>

      <h3 className="mb-2 font-mono text-lg text-fg sm:text-xl">
        {project.title}
      </h3>
      <p className="mb-5 text-sm leading-relaxed text-fg-dim">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech, i) => (
          <span
            key={tech}
            className={`rounded border border-border px-2 py-1 font-mono text-[11px] ${
              TAG_COLORS[i % TAG_COLORS.length]
            }`}
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
