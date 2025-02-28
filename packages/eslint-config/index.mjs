import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
// import prettier from 'eslint-config-prettier';
import globals from 'globals';
import eslintJsRules from './src/eslintJsRules.mjs';
import htmlRules from './src/htmlRules.mjs';
import styleLintRules from './src/styleLintRules.mjs';
import typescriptRules from './src/typescriptRules.mjs';

// -----------------------------
// ESLint JS 설정
// -----------------------------

// setting.json
// editor.defaultFormatter가 prettier이면 false로 설정
// "editor.formatOnSave": false,
// 'eslint.validate': [ 'javascript', 'javascriptreact', 'typescript', 'typescriptreact' ],

const jsConfig = {
	files: [ '**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx', '**/*.mjs', '**/*.cjs' ],
	plugins: {
		'@typescript-eslint': typescriptEslint,
		'@stylistic': stylistic,
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
	rules: {
		...typescriptRules.rules,
		...eslintJsRules.rules,
		...styleLintRules.rules,
	}
};

// -----------------------------
// ESLint HTML 설정
// -----------------------------

// setting.json
// editor.defaultFormatter가 prettier이면 false로 설정
// "editor.formatOnSave": false,
// 'eslint.validate': [ 'html' ],

const htmlConfig = {
	...htmlRules,
	files: [ '**/*.html' ],
};

// -----------------------------
// 내보내기
// -----------------------------

export default [
	js.configs.recommended,
	// prettier,
	jsConfig,

	// {
	// 	rules: {
	// 		'no-undef': 'off',
	// 		'no-var': 'off',
	// 		'no-unused-vars': 'off'
	// 	},
	// },

	// htmlConfig
];
