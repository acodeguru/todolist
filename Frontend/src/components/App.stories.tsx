import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import  {Index}  from '../index';
export default {
  title: 'Complete App',
  component: Index,
} as Meta;

const Template: Story = (args) => <Index></Index>;

export const CompleteApp = Template.bind({});

