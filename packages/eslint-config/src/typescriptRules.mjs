// ------------------
// @typescript-eslint/eslint-plugin
// ------------------
// https://typescript-eslint.io/rules/


const typescriptRules = {
	'@typescript-eslint/no-non-null-assertion': 'off',
	// any 타입 허용
	'@typescript-eslint/no-explicit-any': 'off',
	// 사용하지 않는 변수 체크
	// '@typescript-eslint/no-unused-vars': 'off',
};

export default {
	// files: [ '**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx', '**/*.mjs', '**/*.cjs' ],
	// plugins: {
	// 	'@typescript-eslint': typescriptEslint,
	// },

	// parser: tsParser,
	// parserOptions: {
	// 	ecmaVersion: 'latest',
	// 	sourceType: 'module',
	// 	ecmaFeatures: { jsx: true },
	// },
	rules: typescriptRules
};
