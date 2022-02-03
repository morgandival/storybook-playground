import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Header from '../../components/Header';

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = { backgroundColor: '#ebe' };

export const Secondary = Template.bind({});
Secondary.args = { backgroundColor: '#beb' };
