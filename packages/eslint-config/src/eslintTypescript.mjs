// ------------------
// @typescript-eslint/eslint-plugin
// ------------------
// https://typescript-eslint.io/rules/

import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import { FILE_JS } from './constant.mjs';

const typescriptRules = {
	'@typescript-eslint/no-non-null-assertion': 'off',
	// any 타입 허용
	'@typescript-eslint/no-explicit-any': 'off',
	// 사용하지 않는 변수 체크
	// '@typescript-eslint/no-unused-vars': 'off',
};

export default {
	// files 값이 같아야 최종 merge됨
	files: FILE_JS,

	plugins: {
		'@typescript-eslint': typescriptEslint,
	},

	languageOptions: {
		parser: tsParser,
		parserOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			ecmaFeatures: { jsx: true },
		},
	},

	rules: typescriptRules
};
