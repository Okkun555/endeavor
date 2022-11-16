import { ComponentMeta, ComponentStory } from '@storybook/react';
import TopComponent from './Top';

export default {
  title: 'Top',
  component: TopComponent,
} as ComponentMeta<typeof TopComponent>;

const Template: ComponentStory<typeof TopComponent> = (args) => (
  <TopComponent />
);

export const Top = Template.bind({});
