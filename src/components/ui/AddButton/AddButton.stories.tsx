import { ComponentMeta, ComponentStory } from '@storybook/react';
import AddButtonComponent from './AddButton';

export default {
  title: 'AddButton',
  component: AddButtonComponent,
} as ComponentMeta<typeof AddButtonComponent>;

const Template: ComponentStory<typeof AddButtonComponent> = () => (
  <AddButtonComponent />
);

export const AddButton = Template.bind({});
