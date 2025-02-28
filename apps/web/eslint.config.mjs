import config from '@repo/eslint-config';

// const gs = config[2].languageOptions.globals;
// console.log('===>', config[2].languageOptions.parser);

// globals 객체를 강제로 초기화
// Object.keys(config[2].languageOptions.globals);
// Object.keys(config[2].languageOptions.parser);

// console.log('ESLint Config:', JSON.stringify(config, null, 2));
export default [ ...config ];
