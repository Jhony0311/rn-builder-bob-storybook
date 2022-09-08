import {palette} from 'my-design-system';

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  backgrounds: {
    default: 'plain',
    values: [
      {name: 'plain', value: 'white', default: true},
      {name: 'violet', value: palette.colorPrimary500},
      {name: 'dynamic green', value: palette.colorSecondary500},
      {name: 'mint', value: palette.colorTertiary500},
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Intro', 'Foundations', ['Colors', 'Typography'], 'Components', 'Layouts', 'Patterns'],
    },
  },
};
