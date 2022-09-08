const path = require('path');

module.exports = {
  stories: ['../src/stories/**/*.stories.?(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-react-native-web',
      options: {
        modulesToAlias: {
          'lottie-react-native': 'react-native-web-lottie',
        },
      },
    },
  ],
  framework: '@storybook/react',
};
