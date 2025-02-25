import typescriptEslint from '@typescript-eslint/eslint-plugin';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import js from '@eslint/js';
import prettier from 'eslint-config-prettier';

// ESLint 기본 설정
const config = {
	files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
	plugins: {
		'@typescript-eslint': typescriptEslint,
	},

	languageOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		globals: {
			...globals.node,
			// ...globals.builtin,
			...globals.browser, // 브라우저 전역 객체
			// ...globals.es2020, // ES2020 전역 객체
			// React: 'readonly', // React도 전역으로 사용 가능하게
			// JSX: 'readonly', // JSX도 전역으로 사용 가능하게
		},
		parser: tsParser,
		parserOptions: {
			ecmaVersion: 2020,
			sourceType: 'module',
			ecmaFeatures: { jsx: true },
		},
	},

	// https://eslint.org/docs/latest/rules/
	rules: {
		'@typescript-eslint/no-non-null-assertion': 'off',

		// 'prettier/prettier': 'error',
		// var 변수 선언 금지 (let 또는 const를 사용)
		'no-unused-vars': 'warn',

		// console 객체의 사용을 제한
		// 'no-console': 'warn',

		// ==와 != 연산자를 사용 금지 (===와 !==를 사용)
		eqeqeq: 'warn',

		// 불필요한 괄호를 제거하지 않도록 설정
		'no-extra-parens': 'off',
		// 'arrow-parens': ['error', 'always'],
		'no-unexpected-multiline': 'error',
		// 'multiline-ternary': ['error', 'never'],
	},
};

export default [js.configs.recommended, prettier, config];
