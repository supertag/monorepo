# `Monorepo` Vite starter

Monorepo 구성 템플릿입니다.  
새로운 프로젝트를 생성할때 boilerflate로 사용하세요.

> 본 프로젝트는 Turborepo프로젝트 (
> [`create-turbo`](https://github.com/vercel/turborepo/tree/main/examples/with-vite-react)
> ) 저장소를 fork 함  
> `npx create-turbo@latest -e with-vite-react`

> 프로젝트 구성 및 설정에 대한 내용은 [`_doc`](./_doc) 폴더 내용을 참고하세요

## Using this example

Run the following command:

```sh
pnpm install
pnpm run dev
pnpm run format
pnpm run lint
```

## What's inside?

이 Monorepo에는 다음 패키지 및 앱이 포함되어 있습니다.

### Apps and Packages

- `web`: react [vite](https://vitejs.dev) ts app
- `@repo/ui`: a stub component library shared by `web` application
- `@repo/eslint-config`: shared `eslint` configurations
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

각 패키지와 앱은 100% [TypeScript](https://www.typescriptlang.org/)입니다.

### Utilities

이 Monorepo에는 이미 설정된 추가 도구가 있습니다.

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

Eslint의 Rules는 다음을 참고하세요.

- [ESLint rules](https://eslint.org/docs/latest/rules/)
- [ESLint Stylistic default](https://eslint.style/packages/default)
- [typescript-eslint rules](https://typescript-eslint.io/rules/)

## Vscode 확장 도구 (선택 사항)

vscode 확장 도구 설치 및 설정이 필요합니다.

> 설정 파일 내용은 [`_doc/설정 파일 샘플`](./_doc/설정%20파일%20샘플/) 폴더 내용을 참고하세요

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### prettier 확장 기능

- 파일 전체 포맷: `Shift` + `Alt` + `F`
- 선택 영역 포맷: `Ctrl` + `K` & `Ctrl` + `F`

### ESLint 확장기능

- `Ctrl` + `Shift` + `P` → `ESLint: Restart ESLint Server`
- `Ctrl` + `Shift` + `P` → `ESLint: Fix all auto-fixable problems` (참고)
