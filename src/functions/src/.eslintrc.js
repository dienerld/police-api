module.exports = {
	env: {
		es2021: true,
		node: true
	},
	extends: 'standard',
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	rules: {
		'no-tabs': 'off',
		semi: ['error', 'always'],
		indent: ['error', 'tab'],
		'comma-dangle': ['error', 'never']
	}
};
