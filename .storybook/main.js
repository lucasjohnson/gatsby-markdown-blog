module.exports = {
	stories: [`../stories/**/*.stories.js`, `../stories/**/*.stories.tsx`],
	addons: [`@storybook/addon-actions`, `@storybook/addon-links`],
	webpackFinal: async (config) => {
		config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];
		config.module.rules[0].use[0].loader = require.resolve(`babel-loader`);
		config.module.rules[0].use[0].options.presets = [
			require.resolve(`@babel/preset-react`),
			require.resolve(`@babel/preset-env`)
		];

		config.module.rules[0].use[0].options.plugins = [
			require.resolve(`@babel/plugin-proposal-class-properties`),
			require.resolve(`babel-plugin-remove-graphql-queries`)
		];

		config.resolve.mainFields = [`browser`, `module`, `main`];

		config.module.rules.push({
			test: /\.(ts|tsx)$/,
			loader: require.resolve(`babel-loader`),
			options: {
				presets: [[`react-app`, { flow: false, typescript: true }]],
				plugins: [
					require.resolve(`@babel/plugin-proposal-class-properties`),
					require.resolve(`babel-plugin-remove-graphql-queries`)
				]
			}
		});
		config.resolve.extensions.push(`.ts`, `.tsx`);

		return config;
	}
};
