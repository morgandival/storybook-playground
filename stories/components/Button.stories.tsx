import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    backgroundColor: { control: 'color' },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large']
    }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Red = Template.bind({});
Red.args = {
  label: 'Press me!',
  backgroundColor: 'red',
  size: 'md'
};

export const Blue = Template.bind({});
Blue.args = {
  label: 'Press me!',
  backgroundColor: 'blue',
  size: 'lg'
};
