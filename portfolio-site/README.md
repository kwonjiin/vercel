# Portfolio Site

React + Next.js(App Router) + TypeScript + Tailwind CSS로 만든 "코드 에디터" 컨셉의
개발자 포트폴리오입니다. 페이지는 총 3개(홈 / 자기소개 / 프로젝트)입니다.

## 실행 방법

```bash
npm install
npm run dev
```

`http://localhost:3000` 에서 확인할 수 있습니다.

## 배포

가장 쉬운 방법은 [Vercel](https://vercel.com)입니다. GitHub 저장소에 push한 뒤
Vercel에서 import만 하면 자동으로 빌드/배포됩니다.

## 꼭 수정해야 할 것들 (TODO)

1. **`lib/projects.data.ts`** — 프로젝트 4개의 실제 이름, 설명, 기술 스택, GitHub/배포 링크로 교체
2. **`app/about/page.tsx`** — `SKILLS`, `TIMELINE`, 자기소개 문구를 실제 내용으로 교체
3. **`app/layout.tsx`** — `metadata`의 이름을 실제 이름으로 교체
4. **`app/page.tsx`** — 히어로의 `heroLines` (이름, role, focus 배열)을 실제 정보로 교체
5. **`public/resume.pdf`** — 이력서 PDF 파일을 추가하면 "이력서 다운로드" 버튼이 바로 동작합니다
6. (선택) 파비콘/OG 이미지를 `app/` 에 `icon.png`, `opengraph-image.png`로 추가하면 Next.js가 자동 인식합니다

## 디자인 컨셉

- **테마**: VS Code 에디터를 오마주한 다크 테마. 상단 네비게이션이 에디터 탭처럼 동작합니다.
- **컬러**: 웜 차콜 배경(`#16181d`) + 신택스 하이라이트 3색(cyan/amber/magenta) — `tailwind.config.ts`에서 수정 가능
- **폰트**: 헤드라인/코드 = JetBrains Mono, 본문 = Inter
- **인터랙션**: 스크롤 리빌(Framer Motion), 프로젝트 카드 3D 틸트, 데스크톱 커스텀 커서,
  마우스를 따라 반응하는 캔버스 그리드 배경. `prefers-reduced-motion`을 존중하도록 처리되어 있습니다.

## 폴더 구조

```
app/
  page.tsx            # 홈 (히어로)
  about/page.tsx       # 자기소개
  projects/page.tsx    # 프로젝트 목록
components/
  Nav.tsx               # 에디터 탭 네비게이션
  CustomCursor.tsx      # 커스텀 커서
  AnimatedGridBackground.tsx
  ProjectCard.tsx
  RevealOnScroll.tsx
  TypingText.tsx
lib/
  projects.data.ts      # 프로젝트 데이터 (여기만 고치면 4개 카드 다 반영됨)
```
