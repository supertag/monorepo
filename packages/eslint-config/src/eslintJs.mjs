// ------------------
// @eslint/js
// ------------------
// https://eslint.org/docs/latest/rules/

import { FILE_JS } from './constant.mjs';

const eslintJsRules = {
	// 화살표 함수 본문 주위에 중괄호 생략 허용
	'arrow-body-style': [ 'warn', 'as-needed' ],

	// ==와 != 연산자를 사용 금지 (===와 !==를 사용)
	// 피연산자 중 하나가 표현식 typeof이거나 두 피연산자가 동일한 유형의 리터럴인 경우에만 수정
	'eqeqeq': [ 'warn', 'always' ],
	// 제한된 이름을 변수 이름으로 허용하지 않음
	'no-shadow-restricted-names': 'warn',
	// 같은 이름으로 바꾸는 것을 허용안함(가져오기, 내보내기 및 구조 분해된 할당)
	'no-useless-rename': [
		'warn',
		{
			ignoreDestructuring: false,
			ignoreImport: false,
			ignoreExport: false,
		},
	],
	// 중복된 'return'문 허용안함
	'no-useless-return': [ 'warn' ],
	// var 사용 금지
	'no-var': [ 'warn' ],
	// 사용되지 않는 var 허용안함
	'no-unused-vars': [
		'warn',
		{
			vars: 'all',
			args: 'after-used',
			caughtErrors: 'all',
			ignoreRestSiblings: false,
			reportUsedIgnorePattern: false,
		},
	],
	/*
    'sort-imports': ['warn', {
        'ignoreCase': false,
        'ignoreDeclarationSort': false,
        'ignoreMemberSort': false,
        'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single'],
        'allowSeparatedGroups': false
    }],
    */
};

export default {
	// files 값이 같아야 최종 merge됨
	files: FILE_JS,
	rules: eslintJsRules
};
