module.exports = {
  stories: [
    // Paths to the story files
    '../src/components/**/*.stories.mdx',
    '../src/components/elements/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/components/modules/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
    'storybook-addon-next-router'
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
    });

    return config;
  }
};
