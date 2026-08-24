import Link from "next/link";
import { ArrowRight, FileDown } from "lucide-react";
import AnimatedGridBackground from "@/components/AnimatedGridBackground";
import TypingText from "@/components/TypingText";
import RevealOnScroll from "@/components/RevealOnScroll";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects.data";

export default function HomePage() {
  const heroLines = [
    [
      { text: "const ", className: "text-magenta" },
      { text: "developer", className: "text-fg" },
      { text: " = {", className: "text-fg-dim" },
    ],
    [
      { text: "  name: ", className: "text-fg-dim" },
      { text: "'홍길동'", className: "text-cyan" },
      { text: ",", className: "text-fg-dim" },
    ],
    [
      { text: "  role: ", className: "text-fg-dim" },
      { text: "'Frontend Developer'", className: "text-cyan" },
      { text: ",", className: "text-fg-dim" },
    ],
    [
      { text: "  focus: ", className: "text-fg-dim" },
      { text: "['React', 'Next.js', 'UX']", className: "text-amber" },
      { text: ",", className: "text-fg-dim" },
    ],
    [{ text: "};", className: "text-fg-dim" }],
  ];

  return (
    <>
      {/* 히어로 섹션 */}
      <section className="relative overflow-hidden border-b border-border">
        <AnimatedGridBackground />
        <div className="pointer-events-none absolute inset-0 bg-grid-fade" />

        <div className="relative mx-auto max-w-5xl px-6 pb-20 pt-16 sm:pb-28 sm:pt-24">
          <div className="overflow-hidden rounded-lg border border-border bg-bg-elevated/80 shadow-2xl backdrop-blur-sm">
            {/* 에디터 상단 바 */}
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-rose/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-cyan/70" />
              <span className="ml-3 font-mono text-xs text-fg-faint">
                profile.ts
              </span>
            </div>

            {/* 코드 본문 */}
            <div className="flex px-2 py-6 sm:px-4 sm:py-10">
              <div
                aria-hidden="true"
                className="hidden select-none pr-4 text-right font-mono text-sm text-fg-faint/60 sm:block"
              >
                {heroLines.map((_, i) => (
                  <div key={i} className="leading-tight">
                    {i + 1}
                  </div>
                ))}
              </div>
              <div className="min-w-0 flex-1 font-mono text-base sm:text-2xl md:text-[26px]">
                <TypingText lines={heroLines} />
              </div>
            </div>
          </div>

          <p className="mt-8 max-w-xl font-sans text-base leading-relaxed text-fg-dim sm:text-lg">
            사용자가 실제로 느끼는 속도와 완성도를 중요하게 생각하는
            프론트엔드 개발자입니다. 아래에서 제가 만든 프로젝트와 이야기를
            확인해보세요.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/projects"
              data-cursor="hover"
              className="group inline-flex items-center gap-2 rounded-md bg-cyan px-5 py-3 font-mono text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
            >
              프로젝트 보기
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
            <a
              href="/resume.pdf"
              data-cursor="hover"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 font-mono text-sm text-fg-dim transition-colors hover:border-border-bright hover:text-fg"
            >
              <FileDown size={16} />
              이력서 다운로드
            </a>
          </div>
        </div>
      </section>

      {/* 대표 프로젝트 미리보기 */}
      <section className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <RevealOnScroll>
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 font-mono text-xs text-cyan">
                {/* // featured */}
              </p>
              <h2 className="font-mono text-2xl text-fg sm:text-3xl">
                대표 프로젝트
              </h2>
            </div>
            <Link
              href="/projects"
              data-cursor="hover"
              className="hidden shrink-0 items-center gap-1 font-mono text-sm text-fg-dim transition-colors hover:text-cyan sm:flex"
            >
              전체 보기 <ArrowRight size={14} />
            </Link>
          </div>
        </RevealOnScroll>

        <div className="grid gap-5 sm:grid-cols-2">
          {projects.slice(0, 2).map((project, i) => (
            <RevealOnScroll key={project.slug} delay={i * 0.1}>
              <ProjectCard project={project} index={i} />
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.2}>
          <Link
            href="/projects"
            data-cursor="hover"
            className="mt-8 flex items-center gap-1 font-mono text-sm text-fg-dim transition-colors hover:text-cyan sm:hidden"
          >
            전체 프로젝트 보기 <ArrowRight size={14} />
          </Link>
        </RevealOnScroll>
      </section>
    </>
  );
}
