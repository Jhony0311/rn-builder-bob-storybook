const path = require('path');
const pak = require('../../package.json');
const root = path.resolve(__dirname, '../..');
const node_modules = path.join(__dirname, '../', 'node_modules');

const modules = Object.keys({
  ...pak.peerDependencies,
});

const extraModules = modules.reduce((acc, name) => {
  acc[name] = path.join(__dirname, '..', 'node_modules', name);
  return acc;
}, {});

module.exports = {
  stories: ['../src/stories/**/*.stories.?(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-react-native-web',
      options: {
        modulesToAlias: {
          'lottie-react-native': path.join(node_modules, 'react-native-web-lottie'),
          'react-native-web': path.join(node_modules, 'react-native-web'),
          ...extraModules,
          'my-design-system': path.join(root, 'src/index'),
        },
      },

      projectRoot: path.resolve(root, 'src'),
    },
  ],

  framework: '@storybook/react',
};
