import { ComponentMeta, ComponentStory } from '@storybook/react';
import NotFoundComponent from './NotFound';

export default {
  title: 'NotFound',
  component: NotFoundComponent,
} as ComponentMeta<typeof NotFoundComponent>;

const Template: ComponentStory<typeof NotFoundComponent> = () => (
  <NotFoundComponent />
);

export const NotFound = Template.bind({});
