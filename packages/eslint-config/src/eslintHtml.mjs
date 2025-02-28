// ------------------
// @html-eslint/eslint-plugin
// @html-eslint/parser
// ------------------
// HTML ESLINT
// https://html-eslint.org/docs/getting-started
// https://html-eslint.org/docs/rules

// 템플릿 리터럴을 플러그인이 HTML로 인식하도록 하는 방법은 두 가지
// 1. Tagged Templates with a function named `html`
// html` <div style="${style}"></div>`;

// 2. Template Literal after a html comment (/* html */)
// const code = /* html */ `<div style="${style}"></div>`;

/*
// vscode 구성 (setting.json)
{
	'eslint.validate': [
		'html'
	]
};
*/

import eslintHTML from '@html-eslint/eslint-plugin';
import htmlParser from '@html-eslint/parser';
import { FILE_HTML, LINT_PRESET } from './constant.mjs';

const htmlRules = {

	// 텍스트와 주석에 연속된 여러 개의 공백이나 탭을 허용 안함
	'@html-eslint/no-extra-spacing-text': 'warn',

	// in-line 스타일 설정 금지 (class 설정 권장)
	'@html-eslint/no-inline-styles': 'warn',
	// 대화형 요소가 중첩 금지 (예: button & a 링크 태그 중첩 금지)
	'@html-eslint/no-nested-interactive': 'warn',
	// HTML5 문서에서 오래된 태그 경고
	// '@html-eslint/no-obsolete-tags': 'warn',
	// script, style 태그에서 type 삭제
	'@html-eslint/no-script-style-type': 'warn',

	// 닫는 태그 필수
	// Void Elements 에서 자체 닫는 태그를 사용하는 것을 금지
	'@html-eslint/require-closing-tags': [ 'warn', { selfClosing: 'never' }],
	'@html-eslint/require-doctype': 'warn',

	// ----------------------------
	// 검색엔진 (SEO)
	// ----------------------------

	'@html-eslint/no-multiple-h1': 'off',
	'@html-eslint/require-lang': 'warn',
	'@html-eslint/require-title': 'warn',

	// ----------------------------
	// 접근성 (Accessibility)
	// ----------------------------

	'@html-eslint/require-img-alt': 'warn',
	'@html-eslint/require-meta-viewport': 'warn',

	// ----------------------------
	// 스타일
	// ----------------------------

	// 속성 줄바꿈
	'@html-eslint/attrs-newline': [
		'warn',
		{
			// 닫는 꺽쇠 위치
			closeStyle: 'sameline', // Default `"newline"`
			ifAttrsMoreThan: LINT_PRESET.html.newlineAttrsMin, // Default `2`
		}
	],
	// 요소 줄바꿈
	'@html-eslint/element-newline': [ 'warn', { skip: LINT_PRESET.html.newlineSkip }],
	// 속성 정렬 순서
	'@html-eslint/sort-attrs': [ 'warn', { priority: LINT_PRESET.html.sortAttrs }],

	'@html-eslint/indent': [
		'warn',
		LINT_PRESET.indent,
		{
			// 속성에 대한 들여쓰기 수준
			Attribute: 1,
			// 지정된 태그의 자식 태그 들여쓰기 증가량을 지정
			tagChildrenIndent: LINT_PRESET.html.childrenIndent
		}
	],

	'@html-eslint/no-multiple-empty-lines': [ 'warn', { max: LINT_PRESET.maxEmptyLine }],
	// 줄의 끝에 공백 허용 안함
	'@html-eslint/no-trailing-spaces': 'warn',
	// 기본값 "double"
	'@html-eslint/quotes': 'error',

	// 속성 주변 및/또는 태그 시작과 끝 사이에 추가 공백을 허용 안함
	'@html-eslint/no-extra-spacing-attrs': [
		'warn',
		{
			enforceBeforeSelfClose: true,
			disallowMissing: true,
			disallowTabs: true,
			disallowInAssignment: true
		}
	],
};

export default {
	// recommended configuration included in the plugin
	...eslintHTML.configs['flat/recommended'],

	files: FILE_HTML,

	plugins: {
		'@html-eslint': eslintHTML,
	},

	languageOptions: {
		parser: htmlParser,
	},

	rules: {
		// Must be defined. If not, all recommended rules will be lost
		...eslintHTML.configs['flat/recommended'].rules,
		...htmlRules
	}
};
