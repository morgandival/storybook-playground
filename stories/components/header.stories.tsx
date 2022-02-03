import Header from '../../components/Header';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Header',
  component: Header
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header />;

export const Primary = Template.bind({});
Primary.args = { backgroundColor: '#ebe' };
