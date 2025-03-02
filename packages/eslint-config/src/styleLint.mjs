// ------------------
// @stylistic/eslint-plugin
// ------------------
// https://eslint.style/packages/default

import stylistic from '@stylistic/eslint-plugin';
import { FILE_JS, LINT_PRESET } from './constant.mjs';

const styleLintRules = {
	// 'unix'(LF), 'windows'(CRLF) 줄 끝 문자를 사용
	// git을 사용하는 경우 .gitattributes 파일에 다음 줄을 추가하여
	// git이 .js 파일의 줄 바꿈을 변환하지 못하도록 할 수 있습니다.
	// *.js text eol=lf
	// git을 사용하는 경우 .gitattributes 파일을 사용하지 않으면
	// - 파일을 체크아웃할 때 LF 줄바꿈을 CRLF로 변환하므로 'windows'(CRLF)로 설정
	// - 변경 사항을 커밋할 때는 줄바꿈을 LF로 저장하므로 저장소는 항상 LF로 저장됨
	'@stylistic/linebreak-style': [ 'warn', 'windows' ],
	// (customize) 파일이 줄바꿈(always: LF)으로 끝나도록 강제
	'@stylistic/eol-last': [ 'warn', 'always' ],
	// no-multiple-empty-lines with maxEOF및/또는 no-trailing-spaces 를 활성화

	// -----------------
	// 줄바꿈
	// -----------------

	// 배열 대괄호를 연 후와 닫기 전에 줄바꿈
	'@stylistic/array-bracket-newline': [ 'warn', { multiline: true }],
	// 각 배열 요소 뒤에 줄 바꿈을 적용
	'@stylistic/array-element-newline': [
		'warn',
		{ consistent: true, multiline: true },
	],
	// 중괄호를 연 후와 닫기 전에 일관된 줄 바꿈을 적용
	'@stylistic/curly-newline': [ 'warn', { consistent: true, multiline: true }],
	// 함수 호출의 인수 사이에 줄 바꿈
	'@stylistic/function-call-argument-newline': [ 'warn', 'consistent' ],
	// 함수 괄호 안에 줄바꿈을 요구하거나 허용
	'@stylistic/function-paren-newline': [ 'warn', 'multiline-arguments' ],
	// 화살표 함수 본문 앞에 줄 바꿈을 허용하지 않음
	'@stylistic/implicit-arrow-linebreak': [ 'warn', 'beside' ],

	/*
    // 여러 줄로 된 JSX 주위에 괄호 사용 여부
    '@stylistic/jsx-wrap-multilines': [
        'warn',
        {
            declaration: 'parens',
            assignment: 'parens',
            return: 'parens',
            arrow: 'parens',
            condition: 'ignore',
            logical: 'ignore',
            prop: 'ignore',
            propertyValue: 'ignore'
        }
    ],
    */
	// '@stylistic/lines-around-comment'

	/*
	// (customize)
	// '@stylistic/lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: true }],
	// 3항식의 피연산자 사이에 줄바꿈
    // '@stylistic/multiline-ternary'
    */
	// 한줄에 기술할 수있는 코드 수(;)
	'@stylistic/max-statements-per-line': [ 'warn', { max: 1 }],

	// 메서드 체인에서 각 호출 후에 줄바꿈 (지정된 깊이까지 같은 라인 허용)
	'@stylistic/newline-per-chained-call': [ 'warn', { ignoreChainWithDepth: 2 }],
	// 객체 중괄호를 연 후와 닫기 전에 일관된 줄 바꿈
	'@stylistic/object-curly-newline': [ 'warn', { consistent: true }],
	// 개체 속성을 별도의 줄에 배치하도록 적용
	// '@stylistic/object-property-newline'
	// 연산자 줄바꿈 방지
	'@stylistic/operator-linebreak': [
		'warn',
		'before',
		{ overrides: {
			':': 'after',
			'=>': 'after',
			'=': 'after',
			'?': 'after',
		} },
	],
	// '@stylistic/padding-line-between-statements'
	// (customize)
	// '@stylistic/dot-location': [ 'warn', 'property' ],

	// 긴줄 길이 체한 (fix 안됨)
	// '@stylistic/max-len': [ 'warn', { code: 80, tabWidth: 4, ignoreUrls: true }],

	// -----------------
	// 간격
	// -----------------

	// (customize) 배열 대괄호 안에 일관된 간격을 적용
	'@stylistic/array-bracket-spacing': [
		'warn',
		'always',
		{ singleValue: true, objectsInArrays: false, arraysInArrays: false },
	],
	// (customize) 계산된 속성 사이에 공백
	// '@stylistic/computed-property-spacing': [ 'warn', 'never', { enforceForClassMembers: true }],
	// 함수 호출 사이 공백
	'@stylistic/function-call-spacing': [ 'warn', 'never' ],
	'@stylistic/generator-star-spacing': [ 'warn', { before: true, after: false, anonymous: 'neither' }],
	// (customize) 객체 속성 구분자(:) 주변 정렬
	'@stylistic/key-spacing': [
		'warn',
		{
			mode: 'strict',
			// singleLine: { beforeColon: false, afterColon: true },
			// multiLine: { beforeColon: true, afterColon: true, align: 'colon' }
		},
	],
	// (customize) 키워드 앞뒤에 일관된 간격을 적용
	'@stylistic/keyword-spacing': [
		'warn',
		{ overrides: {
			if: { after: false },
			for: { after: false },
			while: { after: false },
			static: { after: false },
			as: { after: false },
		} },
	],
	// 연산자 주변 공백
	'@stylistic/space-infix-ops': [ 'warn', { int32Hint: true }],
	'@stylistic/space-unary-ops': [ 'warn', { words: true, nonwords: false }],
	// (customize) 후행 공백을 허용하지 않음
	'@stylistic/no-trailing-spaces': 'warn',
	// (customize) 속성 앞에 공백 금지
	'@stylistic/no-whitespace-before-property': 'warn',

	// -----------------
	// tab 들여쓰기 (customize)
	// -----------------

	// '@stylistic/no-tabs': 'off',
	'@stylistic/indent': [ 'warn', LINT_PRESET.indent, { tabLength: 4, ignoredNodes: [ 'ImportDeclaration' ] }],
	'@stylistic/indent-binary-ops': [ 'warn', LINT_PRESET.indent ],
	'@stylistic/jsx-indent-props': [ 'warn', LINT_PRESET.indent ],

	// -----------------
	// JSX 줄바꿈
	// -----------------

	// JSX 속성과 표현식에서 중괄호로 일관된 줄바꿈을 적용
	'@stylistic/jsx-curly-newline': [
		'warn',
		{ multiline: 'consistent', singleline: 'consistent' },
	],
	// JSX에서 첫 번째 속성의 적절한 위치에 줄바꿈을 적용 (never: 태그와 같은 줄)
	'@stylistic/jsx-first-prop-new-line': [ 'warn', 'never' ],
	// 함수의 인수로 JSX 요소를 사용할 경우 해당 요소 앞뒤에 줄 바꿈을 적용
	'@stylistic/jsx-function-call-newline': [ 'warn', 'multiline' ],
	'@stylistic/jsx-closing-bracket-location': [
		'warn',
		{ selfClosing: 'after-props', nonEmpty: 'after-props' },
	],
	'@stylistic/jsx-closing-tag-location': [ 'warn', 'tag-aligned' ],

	// -----------------
	// 기타
	// -----------------

	// (customize) 괄호 유지
	// '@stylistic/arrow-parens': [ 'warn', 'always' ],

	'@stylistic/no-extra-parens': 'off',
	'@stylistic/no-extra-semi': 'warn',
	'@stylistic/no-floating-decimal': 'warn',
	'@stylistic/no-multiple-empty-lines': [ 'warn', { max: LINT_PRESET.maxEmptyLine, maxEOF: 0, maxBOF: 0 }],
};

export default {
	// files 값이 같아야 최종 merge됨
	files: FILE_JS,

	plugins: {
		'@stylistic': stylistic,
	},

	rules: {
		// code style rules
		// https://eslint.style/guide/config-presets
		// stylistic.configs['disable-legacy'],
		...stylistic.configs.recommended.rules,
		...stylistic.configs.customize({
			flat: true,
			// pluginName: '@stylistic',
			jsx: true,
			indent: LINT_PRESET.indent,
			...LINT_PRESET.js
		}).rules,

		...styleLintRules
	}
};
