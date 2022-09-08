import React from 'react';
import {Loading as LoadingComp} from 'my-design-system';
import {palette} from 'my-design-system';

import type {Meta, Story} from '@storybook/react-native';
import type {LoadingProps} from 'my-design-system';

const story = {
  title: 'Components/Loading',
  component: LoadingComp,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['tiny', 'small', 'medium', 'large', 'giant'],
      },
    },
    color: {
      control: {type: 'color'},
    },
  },
};

const Template: Story<LoadingProps> = (args) => <LoadingComp {...args} />;

export const Loading = Template.bind({});

Loading.parameters = {
  chromatic: {disableSnapshot: true},
};

Loading.args = {
  size: 'medium',
  color: palette.colorPrimary500,
};

export default story as Meta;
