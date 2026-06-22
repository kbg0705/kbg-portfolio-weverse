# Miricanvas Junior PM Portfolio

미리캔버스 Junior Product Manager 지원을 위한 PC 전용 정적 포트폴리오입니다. React, TypeScript, Vite 기반이며 GitHub Pages와 Vercel 배포를 지원합니다.

## 로컬 실행 방법

```bash
pnpm install
pnpm run dev
```

검증:

```bash
npm run lint
npm run build
```

이 저장소는 pnpm 잠금파일을 사용합니다. npm만 사용하는 환경에서는 `npm install` 후 동일한 스크립트를 실행할 수 있습니다.

## 콘텐츠 수정 위치

프로젝트 카드 콘텐츠는 `src/data/projects.ts`에서 관리합니다.

지표 콘텐츠는 `src/data/metrics.ts`, 작업 프로세스는 `src/data/process.ts`에서 수정합니다.

메인 화면 섹션 컴포넌트는 `src/components`에 분리되어 있습니다.

## 이미지 교체 방법

현재 NPB 대표 카드에는 이미지 placeholder 영역이 준비되어 있습니다.

이미지를 추가할 때는 `public/images` 폴더를 만들고 정적 파일을 넣은 뒤, `ProjectCard.tsx`의 placeholder 영역을 실제 `<img>` 또는 `<picture>` 구조로 교체하면 됩니다.

권장 이미지 유형:

- 문제 및 백로그
- 제품 화면
- 지표 또는 결과

## 이력서 PDF 추가 위치

이력서 다운로드 버튼은 다음 경로를 바라봅니다.

```text
public/resume/김부경_이력서.pdf
```

PDF 파일을 위 위치에 추가하면 `/resume/김부경_이력서.pdf` 경로로 다운로드됩니다.

## GitHub 업로드 방법

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/USER/REPOSITORY.git
git push -u origin main
```

## GitHub Pages 배포

`.github/workflows/deploy-pages.yml`이 포함되어 있습니다. `main` 브랜치에 push하면 GitHub Actions가 빌드 후 Pages에 배포합니다.

현재 배포 주소:

```text
https://kbg0705.github.io/miricanvas-junior-pm-portfolio/
```

## Vercel 배포 방법

1. Vercel에서 새 프로젝트를 생성합니다.
2. GitHub 저장소를 연결합니다.
3. Framework Preset은 `Vite`로 선택합니다.
4. Build Command는 `pnpm run build`, Output Directory는 `dist`로 설정합니다.
5. 별도 백엔드나 데이터베이스 없이 정적 사이트로 배포합니다.
