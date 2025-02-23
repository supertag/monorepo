module.exports = {
	env: {
		node: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
	},

	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	plugins: ['@typescript-eslint', 'prettier'],

	rules: {
		'@typescript-eslint/no-non-null-assertion': 'off',
		'prettier/prettier': 'error',
		// var 변수 선언 금지 (let 또는 const를 사용)
		'no-unused-vars': 'warn',
		// console 객체의 사용을 제한
		// 'no-console': 'warn',
		// ==와 != 연산자를 사용 금지 (===와 !==를 사용)
		'eqeqeq': 'warn',
	},
};
