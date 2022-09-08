import {withBackgrounds} from '@storybook/addon-ondevice-backgrounds';
import {palette} from 'my-design-system';

export const decorators = [withBackgrounds];

export const parameters = {
  backgrounds: [
    {name: 'plain', value: 'white', default: true},
    {name: 'violet', value: palette.colorPrimary500},
    {name: 'dynamic green', value: palette.colorSecondary500},
    {name: 'mint', value: palette.colorTertiary500},
  ],
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
