import RevealOnScroll from "@/components/RevealOnScroll";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects.data";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <RevealOnScroll>
        <p className="mb-2 font-mono text-xs text-cyan">
          // {projects.length} projects
        </p>
        <h1 className="mb-3 font-mono text-2xl text-fg sm:text-3xl">
          프로젝트
        </h1>
        <p className="mb-12 max-w-xl text-sm leading-relaxed text-fg-dim sm:text-base">
          직접 기획하고 구현한 프로젝트들입니다. 카드를 클릭하면 GitHub 저장소나
          라이브 데모로 이동합니다.
        </p>
      </RevealOnScroll>

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, i) => (
          <RevealOnScroll key={project.slug} delay={(i % 2) * 0.1}>
            <ProjectCard project={project} index={i} />
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}
