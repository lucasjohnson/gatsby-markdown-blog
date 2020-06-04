module.exports = {
	parser: `@typescript-eslint/parser`,
	extends: [`plugin:@typescript-eslint/recommended`, `plugin:prettier/recommended`, `prettier/@typescript-eslint`],
	plugins: [`@typescript-eslint`, `prettier`, `jsx-a11y`],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: `module`
	},
	env: {
		browser: true,
		node: true
	},
	rules: {
		quotes: `off`,
		'@typescript-eslint/quotes': [
			2,
			`backtick`,
			{
				avoidEscape: true
			}
		],
		'prettier/prettier': [
			`error`,
			{
				tabWidth: 2,
				useTabs: true,
				arrowParens: `always`,
				bracketSpacing: true,
				trailingComma: `none`,
				semi: true,
				singleQuote: true,
				printWidth: 120
			}
		],
		'react/jsx-pascal-case': `off`,
		'jsx-a11y/accessible-emoji': `warn`,
		'jsx-a11y/alt-text': `warn`,
		'jsx-a11y/anchor-has-content': `warn`,
		'jsx-a11y/anchor-is-valid': `warn`,
		'jsx-a11y/aria-activedescendant-has-tabindex': `warn`,
		'jsx-a11y/aria-props': `warn`,
		'jsx-a11y/aria-proptypes': `warn`,
		'jsx-a11y/aria-role': `warn`,
		'jsx-a11y/aria-unsupported-elements': `warn`,
		'jsx-a11y/click-events-have-key-events': `warn`,
		'jsx-a11y/control-has-associated-label': `warn`,
		'jsx-a11y/heading-has-content': `warn`,
		'jsx-a11y/html-has-lang': `warn`,
		'jsx-a11y/iframe-has-title': `warn`,
		'jsx-a11y/img-redundant-alt': `warn`,
		'jsx-a11y/interactive-supports-focus': `warn`,
		'jsx-a11y/label-has-associated-control': `warn`,
		'jsx-a11y/lang': `warn`,
		'jsx-a11y/media-has-caption': `warn`,
		'jsx-a11y/mouse-events-have-key-events': `warn`,
		'jsx-a11y/no-access-key': `warn`,
		'jsx-a11y/no-autofocus': `warn`,
		'jsx-a11y/no-distracting-elements': `warn`,
		'jsx-a11y/no-interactive-element-to-noninteractive-role': `warn`,
		'jsx-a11y/no-noninteractive-element-interactions': `warn`,
		'jsx-a11y/no-noninteractive-element-to-interactive-role': `warn`,
		'jsx-a11y/no-noninteractive-tabindex': `warn`,
		'jsx-a11y/no-onchange': `warn`,
		'jsx-a11y/no-redundant-roles': `warn`,
		'jsx-a11y/no-static-element-interactions': `warn`,
		'jsx-a11y/role-has-required-aria-props': `warn`,
		'jsx-a11y/role-supports-aria-props': `warn`,
		'jsx-a11y/scope': `warn`,
		'jsx-a11y/tabindex-no-positive': `warn`
	}
};
