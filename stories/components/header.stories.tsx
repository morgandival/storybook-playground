import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Header from '../../components/Header';

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    primary: { control: 'boolean' },
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  backgroundColor: '#ebe'
};

export const Secondary = Template.bind({});
Secondary.args = { primary: false, backgroundColor: '#beb' };
