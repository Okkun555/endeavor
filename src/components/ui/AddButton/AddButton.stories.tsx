import { ComponentMeta, ComponentStory } from '@storybook/react';
import AddButtonComponent from './AddButton';

export default {
  title: 'AddButton',
  component: AddButtonComponent,
} as ComponentMeta<typeof AddButtonComponent>;

const Template: ComponentStory<typeof AddButtonComponent> = (args) => (
  <AddButtonComponent onClick={args.onClick} />
);

export const AddButton = Template.bind({});
AddButton.args = {
  onClick: () => {
    return;
  },
};
