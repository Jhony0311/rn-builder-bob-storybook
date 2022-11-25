import React from 'react';
import {InsetView as InsetViewComp, Text} from 'my-design-system';

import type {Meta, Story} from '@storybook/react-native';
import type {InsetViewProps} from 'my-design-system';

const story = {
  title: 'Components/InsetView',
  component: InsetViewComp,
};

const Template: Story<InsetViewProps> = (args) => <InsetViewComp {...args} />;

export const InsetView = Template.bind({});

InsetView.parameters = {
  chromatic: {disableSnapshot: true},
};

InsetView.args = {
  children: <Text>Some text for the view</Text>,
};

export default story as Meta;
