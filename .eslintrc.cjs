/* eslint-env node */

module.exports = {
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		'prettier',
	],
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	settings: { react: { version: '18.2' } },
	plugins: ['react-refresh', 'import', 'jsx-a11y'],
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
	},
};
