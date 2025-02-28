export const FILE_JS = [
	'**/*.js',
	'**/*.jsx',
	'**/*.ts',
	'**/*.tsx',
	'**/*.*js'
];
export const FILE_HTML = [ '**/*.htm*' ];

// 루트/.prettier 설정파일 내용과 함께 수정할 것
// 린트 명령: "eslint \"**/*.{ts,tsx,js,jsx,*js,htm*}\" --fix"
export const LINT_PRESET = {
	maxEmptyLine: 4,
	indent: 'tab',

	js: {
		arrowParens: true,
		blockSpacing: true,
		braceStyle: '1tbs',
		commaDangle: 'only-multiline',
		semi: true,
		quotes: 'single',
		quoteProps: 'consistent-as-needed',
	},

	html: {
		// 줄바꿈 예외
		newlineSkip: [ 'pre' ],
		// 2개 이하까지는 속성 줄바꿈 안함
		newlineAttrsMin: 2,
		// 지정된 태그의 자식 태그 들여쓰기 증가량을 지정
		childrenIndent: { html: 0, body: 1 },
		// 정렬 순서
		sortAttrs: [ 'uid', 'id', 'rel', 'type', 'src', 'href', 'alt', 'title', 'class', 'className', 'style' ]
	}
};
