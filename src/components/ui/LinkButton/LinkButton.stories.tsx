import { ComponentMeta, ComponentStory } from '@storybook/react';
import LinkButtonComponent from './LinkButton';

export default {
  title: 'LinkButton',
  component: LinkButtonComponent,
} as ComponentMeta<typeof LinkButtonComponent>;

const Template: ComponentStory<typeof LinkButtonComponent> = (args) => (
  <LinkButtonComponent
    text={args.text}
    color={args.color}
    size={args.size}
    onClickLink={args.onClickLink}
  />
);

export const LinkButton = Template.bind({});
LinkButton.args = {
  text: 'ログイン',
  color: 'primary',
  size: 'lg',
  onClickLink: () => {
    return;
  },
};
