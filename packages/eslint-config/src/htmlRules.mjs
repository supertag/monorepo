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

export default {
	// recommended configuration included in the plugin
	...eslintHTML.configs['flat/recommended'],
	files: [ '**/*.html' ],
	plugins: {
		'@html-eslint': eslintHTML,
	},
	languageOptions: {
		parser: htmlParser,
	},
	rules: {
		// Must be defined. If not, all recommended rules will be lost
		...eslintHTML.configs['flat/recommended'].rules,
		'@html-eslint/indent': 'error',


		// Specifies the @html-eslint rules to apply to Template Literal.
		'@html-eslint/no-inline-styles': 1,
	}
};
