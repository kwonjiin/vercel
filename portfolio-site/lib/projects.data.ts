export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  role?: string;
  period?: string;
};

/**
 * TODO: 아래 4개 항목을 실제 진행하신 프로젝트 정보로 교체하세요.
 * title, description, stack, githubUrl, liveUrl, role, period 를 채워주시면 됩니다.
 */
export const projects: Project[] = [
  {
    slug: "project-one",
    title: "프로젝트 이름 1",
    description:
      "이 프로젝트가 어떤 문제를 해결했는지, 어떤 역할을 맡았는지 2~3문장으로 작성하세요. 구체적인 수치(예: 응답속도 40% 개선)가 있으면 신뢰도가 올라갑니다.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/your-id/project-one",
    liveUrl: "https://project-one.example.com",
    role: "프론트엔드 개발 (팀 프로젝트, 4인)",
    period: "2025.03 - 2025.06",
  },
  {
    slug: "project-two",
    title: "프로젝트 이름 2",
    description:
      "이 프로젝트가 어떤 문제를 해결했는지, 어떤 역할을 맡았는지 2~3문장으로 작성하세요.",
    stack: ["React", "Node.js", "PostgreSQL"],
    githubUrl: "https://github.com/your-id/project-two",
    role: "풀스택 개발 (개인 프로젝트)",
    period: "2024.11 - 2025.01",
  },
  {
    slug: "project-three",
    title: "프로젝트 이름 3",
    description:
      "이 프로젝트가 어떤 문제를 해결했는지, 어떤 역할을 맡았는지 2~3문장으로 작성하세요.",
    stack: ["React Native", "Firebase"],
    githubUrl: "https://github.com/your-id/project-three",
    liveUrl: "https://project-three.example.com",
    role: "모바일 앱 개발 (팀 프로젝트, 3인)",
    period: "2024.07 - 2024.10",
  },
  {
    slug: "project-four",
    title: "프로젝트 이름 4",
    description:
      "이 프로젝트가 어떤 문제를 해결했는지, 어떤 역할을 맡았는지 2~3문장으로 작성하세요.",
    stack: ["Vue.js", "Express"],
    githubUrl: "https://github.com/your-id/project-four",
    role: "프론트엔드 개발 (개인 프로젝트)",
    period: "2024.03 - 2024.05",
  },
];
