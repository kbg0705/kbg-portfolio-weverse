# Junior Product Manager Portfolio

미리캔버스 Junior Product Manager 지원을 위한 PC 전용 포트폴리오 웹사이트입니다.

## 로컬 실행

```bash
pnpm install
pnpm run dev
```

## 빌드 확인

```bash
pnpm run build
pnpm run preview
```

## GitHub 업로드

```bash
git init
git add .
git commit -m "Initial portfolio setup"
git branch -M main
git remote add origin https://github.com/USER/REPOSITORY.git
git push -u origin main
```

## GitHub Pages 자동 배포

이 저장소에는 `.github/workflows/deploy-pages.yml`이 포함되어 있습니다.

1. GitHub 저장소의 `Settings > Pages`로 이동합니다.
2. Source를 `GitHub Actions`로 선택합니다.
3. `main` 브랜치에 push하면 자동으로 빌드와 배포가 실행됩니다.
4. 배포 주소는 보통 `https://USER.github.io/REPOSITORY/` 형태입니다.

## Vercel 배포

1. Vercel에서 새 프로젝트를 생성합니다.
2. GitHub 저장소를 연결합니다.
3. Framework Preset은 `Vite`로 선택합니다.
4. Build Command는 `pnpm run build`, Output Directory는 `dist`로 설정합니다.
5. 배포 후 PC 기준 화면에서 레이아웃을 확인합니다.
