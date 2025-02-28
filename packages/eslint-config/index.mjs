import js from '@eslint/js';
// import prettier from 'eslint-config-prettier';
import globals from 'globals';
import { FILE_JS } from './src/constant.mjs';
import eslintHtml from './src/eslintHtml.mjs';
import eslintJs from './src/eslintJs.mjs';
import eslintTypescript from './src/eslintTypescript.mjs';
import styleLint from './src/styleLint.mjs';


export default [
	js.configs.recommended,
	// prettier,

	// -----------------------------
	// ESLint JS 설정
	// -----------------------------

	// setting.json
	// editor.defaultFormatter가 prettier이면 false로 설정
	// "editor.formatOnSave": false,
	// 'eslint.validate': [ 'javascript', 'javascriptreact', 'typescript', 'typescriptreact' ],

	eslintTypescript,
	eslintJs,
	styleLint,
	{
		// files 값이 같아야 최종 merge됨
		files: FILE_JS,

		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.node,
				// ...globals.builtin,
				...globals.browser, // 브라우저 전역 객체
				// ...globals.es2020, // ES2020 전역 객체
				// React: 'readonly', // React도 전역으로 사용 가능하게
				// JSX: 'readonly', // JSX도 전역으로 사용 가능하게
			}
		},

		// plugins: {},
		// rules: {},
	},

	// {
	// 	rules: {
	// 		'no-undef': 'off',
	// 		'no-var': 'off',
	// 		'no-unused-vars': 'off'
	// 	},
	// },

	// -----------------------------
	// ESLint HTML 설정
	// -----------------------------

	// setting.json
	// editor.defaultFormatter가 prettier이면 false로 설정
	// "editor.formatOnSave": false,
	// 'eslint.validate': [ 'html' ],

	eslintHtml
];
