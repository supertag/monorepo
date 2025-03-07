# NPM 배포

## NPM 등록/로그인

1. NPM 등록

   - NPM에 가입하여 계정 등록 : [NPM 회원 가입](https://docs.npmjs.com/getting-started/publishing-npm-packages)
   - 가입(생성)된 registry : `https://npmjs.com/~아이디`

2. NPM 로그인

   ```
   npm login (or npm adduser)
   // login 후 email 인증 메일 확인한다.

   npm whoami // 로그인된 계정 확인
   ```

### scoped package

- https://docs.npmjs.com/about-scopes
- https://angular.io/guide/glossary#scoped-package
- https://code-examples.net/ko/docs/npm/getting-started/scoped-packages
- https://code-examples.net/ko/docs/npm/cli/publish

배포할 패키지 이름이 이미 있는지 확인한다.

- scoped-package 이름을 사용하는 경우 NPM 로그인이 필요함.
- https://www.npmjs.com/package/@jj-viewer/skinnable

```
npm init --scope=jj-viewer
```

### publish 계정 유형

scoped package 배포 기본값 : 비공개 (restricted)

```
// 비공개 (restricted) : , 유료 계정 필요함.
npm publish --access=restricted

// 공개 (public) : 무료 계정 사용
npm publish --access=public
```

> 특정 이름과 버전으로 패키지를 게시하면 해당 이름과 버전 조합을 `npm-unpublish` 제거한 경우에도 다시 사용할 수 없음.

### package.json 파일 작성

- Workspace Root package.json : Root 폴더의 `package.json`
- Library Project package.json : 라이브러리 프로젝트 폴더의 `package.json`
- Library Distribution package.json : 라이브러리 프로젝트 빌드 폴더의 `package.json`

1. `Library Project package.json` 파일에 기록

   - 버전 표기 : [Semantic Versioning (SemVer)](https://semver.org/)
   - License : Reference the LICENSE file.
   - Repository : Point to the GitHub repository.

   참고 : [The specifics of npm’s package.json handling](https://docs.npmjs.com/files/package.json)

   ```
   "description": "",
   "keyword": "Jikji Viewer skinnable",
   "author": "Dong-il Park <pdi1066@naver.com> (https://github.com/vulcan9)",
   "license": "MIT",
   "repository": {
     "type" : "git",
     "url" : "https://github.com/tovsoft/jikji.viewer.skinnable.git"
   }
   ```

2. `Project package.json` 파일에 정보 추가

   ```
   {
     "name": "@jj-viewer/skinnable",
     "version": "0.0.1",
     "peerDependencies": {
       "@angular/common": "^8.2.11",
       "@angular/core": "^8.2.11"
     },
     "description": "",
     "keyword": ["Jikji", "Viewer", "Library"],
     "author": "Dong-il Park <pdi1066@naver.com> (https://github.com/vulcan9)",
     "license": "MIT",
     "repository": {
       "type": "git",
       "url": "https://github.com/tovsoft/jikji.viewer.skinnable.git"
     },
     "homepage": "https://github.com/tovsoft/jikji.viewer.skinnable"
   }
   ```

3. LICENSE 파일 작성

### 자동화 코드 (Gulp)

1. 설치 : `npm i gulp`

2. `gulpfile.js` 파일 생성

   ```
   const fs = require('fs');

   exports.build = build;
   exports.default = build;

   // 자동 파일 복사 스크립트
   function build(done){
     fs.copyFileSync('./LICENSE', './dist/skinnable/LICENSE');
     done();
   }
   ```

3. 빌드시에 gulp 실행 스크립트 작성
   ```
   "scripts": {
     ...
     "gulp:build": "gulp build",
     "package": "npm run build:skinnable && npm run gulp:build && npm run pack:skinnable",
     ...
   },
   ```

### 배포를 위한 라이브러리 패키징

```
npm run package
```

# 라이브러리 NPM 배포

- [NPM CLI commands](https://docs.npmjs.com/cli-documentation/)

## NPM 등록/로그인

```
// 사용자 등록하기 (Creating an account)
npm login (or npm adduser)
// login 후 email 인증 메일 확인한다.

npm whoami // 로그인된 계정 확인
```

## NPM 배포

If you want to publish a package on npm using the name `@jj-viewer`,
you need to make sure that the namespace `@jj-viewer` exists on npm.
To create that namespace, you need to create an organization on npm with the name `jj-viewer`.

1. [Create a New Organization](https://www.npmjs.com/org/create)

   - name : jj-viewer
   - Unlimited public packages (Free) - Create
   - Organization이 생성되면 member를 초대할 수도 있음.
   - 배포된 패키지 관리 : https://npmjs.com/org/아이디

2. 파일 NPM 배포

   - `.npmignore`, `README.md`, `LICENSE` 파일 작성
   - 배포 파일 `./dist/skinnable/jj-viewer-skinnable-0.0.1.tgz`
     ```
     // npm publish [<folder>] [--tag <tag>] [--access <public|restricted>]
     npm publish ./dist/skinnable/jj-viewer-skinnable-0.0.1.tgz --access=public
     ```

3. 배포 패키지 확인

   실제 NPM 검색 결과에 반영되는 것은 시간이 조금 필요할 수 있음.

   - https://www.npmjs.com/~아이디 (user account)
   - https://npmjs.com/org/아이디 (Org)
   - https://www.npmjs.com/package/@jj-viewer/skinnable

4. 배포된 패키지 사용

### NPM 재배포 (업데이트)

버전 넘버 업데이트 순서

1. 업데이트 : `Library Project package.json` 파일에서 `version` 넘버를 수정한다.
2. 빌드 : `npm run package`
3. (`LICENSE 파일` 복사)
4. 배포 : `npm publish ./dist/skinnable/jj-viewer-skinnable-0.0.1.tgz --access=public`
5. 패키지 배포 확인 : `https://www.npmjs.com/~아이디`
6. 배포 패키지 사용 : `npm install @jj-viewer/skinnable`

```
// NPM 스크립트로 작성해 놓으면 좋음
// 예) "release": "npm test && npm run package && npm version patch && npm publish"
```

### NPM 저장소에서 제거하기

```
// unpublish an entire package
// 404 페이지로 바뀜. 패키징 없어짐
npm unpublish <package-name> -f

// unpublish a single version of a package
npm unpublish <package-name>@<version>
```

### .npmignore 파일

- `.npmignore` 파일에 리스트업된 파일이나 폴더는 배포에서 제외됨.
- `.npmignore` 파일이 없는 경우에는 `.gitignore` 파일을 대신 참조하여 배포에서 제외됨.
