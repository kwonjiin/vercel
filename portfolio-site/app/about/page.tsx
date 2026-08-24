import RevealOnScroll from "@/components/RevealOnScroll";

const SKILLS: { category: string; items: string[]; color: string }[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    color: "text-cyan",
  },
  {
    category: "Tools",
    items: ["Git", "Figma", "Vercel", "Notion"],
    color: "text-amber",
  },
  {
    category: "Backend / etc",
    items: ["Node.js", "REST API", "Firebase"],
    color: "text-magenta",
  },
];

// TODO: 실제 이력/활동 내역으로 교체하세요.
const TIMELINE = [
  { period: "2025.09 -", title: "취업 준비 중" },
  { period: "2024.03 - 2025.02", title: "단국대학교 경영공학과 졸업" },
  { period: "2023.06 - 2023.12", title: "한화 beyond sw camp 수료" },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      {/* 터미널 스타일 인트로 */}
      <RevealOnScroll>
        <div className="overflow-hidden rounded-lg border border-border bg-bg-elevated">
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-rose/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-cyan/70" />
            <span className="ml-3 font-mono text-xs text-fg-faint">
              zsh — about
            </span>
          </div>
          <div className="space-y-4 px-5 py-6 font-mono text-sm sm:px-8 sm:py-8 sm:text-base">
            <p>
              <span className="text-cyan">guest@portfolio</span>
              <span className="text-fg-dim">:~$ </span>
              <span className="text-fg">whoami</span>
            </p>
            <p className="leading-relaxed text-fg-dim">
              {/* TODO: 실제 자기소개 문구로 교체하세요. */}
              안녕하세요, 사용자 경험을 코드로 완성하는 것을 좋아하는
              개발자 <span className="text-fg">권지민</span>
              입니다. React와 JAVA를 주로 사용하며, 화면 너머의 사용자가
              무엇을 느끼는지까지 고민하며 개발합니다.
            </p>
            <p>
              <span className="text-cyan">jimin001006@portfolio</span>
              <span className="text-fg-dim">:~$ </span>
              <span className="text-fg animate-blink">_</span>
            </p>
          </div>
        </div>
      </RevealOnScroll>

      {/* 기술 스택 */}
      <RevealOnScroll delay={0.1} className="mt-16">
        <p className="mb-2 font-mono text-xs text-cyan">{/* // stack */}</p>
        <h2 className="mb-6 font-mono text-xl text-fg sm:text-2xl">
          기술 스택
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {SKILLS.map((group) => (
            <div
              key={group.category}
              className="rounded-lg border border-border bg-bg-elevated p-5"
            >
              <p className={`mb-3 font-mono text-xs ${group.color}`}>
                {group.category}
              </p>
              <ul className="space-y-1.5">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-fg-dim">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </RevealOnScroll>

      {/* 약력 */}
      <RevealOnScroll delay={0.15} className="mt-16">
         <p className="mb-2 font-mono text-xs text-cyan">{/*// timeline*/}</p> 
        <h2 className="mb-6 font-mono text-xl text-fg sm:text-2xl">약력</h2>
        <ol className="space-y-5 border-l border-border pl-6">
          {TIMELINE.map((item) => (
            <li key={item.title} className="relative">
              <span className="absolute -left-[29px] top-1.5 h-2 w-2 rounded-full bg-cyan" />
              <p className="font-mono text-xs text-fg-faint">
                {item.period}
              </p>
              <p className="mt-1 text-sm text-fg">{item.title}</p>
            </li>
          ))}
        </ol>
      </RevealOnScroll>
    </div>
  );
}
