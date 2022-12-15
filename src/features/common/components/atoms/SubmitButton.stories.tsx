import { ComponentMeta, ComponentStory } from '@storybook/react';
import SubmitButtonComponent from './SubmitButton';

export default {
  title: 'SubmitButton',
  component: SubmitButtonComponent,
} as ComponentMeta<typeof SubmitButtonComponent>;

const Template: ComponentStory<typeof SubmitButtonComponent> = (args) => (
  <SubmitButtonComponent text={args.text} disabled={args.disabled} />
);

export const SubmitButton = Template.bind({});
SubmitButton.args = {
  text: 'Sign In',
  disabled: false,
};
