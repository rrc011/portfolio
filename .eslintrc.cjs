exports = {
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:import/recommended",
		"plugin:jsx-a11y/recommended",
		"plugin:@typescript-eslint/recommended",
		"eslint-config-prettier"
	],
	settings: {
		'import/resolver': {
			alias: {
				map: [
					['@', './src'],
				],
			},
		},
	},
	rules: {
		"no-unused-vars": [
			"error",
			{
				"vars": "all",
				"args": "after-used",
				"ignoreRestSiblings": true,
				"argsIgnorePattern": "^_"
			}
		],
		"react/react-in-jsx-scope": "off"
	}
};
