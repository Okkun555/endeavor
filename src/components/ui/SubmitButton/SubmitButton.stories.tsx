import { ComponentMeta, ComponentStory } from '@storybook/react';
import SubmitButtonComponent from './SubmitButton';

export default {
  title: 'SubmitButton',
  component: SubmitButtonComponent,
} as ComponentMeta<typeof SubmitButtonComponent>;

const Template: ComponentStory<typeof SubmitButtonComponent> = (args) => (
  <SubmitButtonComponent
    text={args.text}
    color={args.color}
    size={args.size}
    width={args.width}
  />
);

export const SubmitButton = Template.bind({});
SubmitButton.args = {
  text: 'Sign In',
  color: 'primary',
  size: 'lg',
  width: 200,
};
