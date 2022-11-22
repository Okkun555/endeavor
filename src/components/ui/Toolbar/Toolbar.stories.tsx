import { ComponentMeta, ComponentStory } from '@storybook/react';
import ToolbarComponent from './Toolbar';

export default {
  title: 'Toolbar',
  component: ToolbarComponent,
} as ComponentMeta<typeof ToolbarComponent>;

const Template: ComponentStory<typeof ToolbarComponent> = (args) => (
  <ToolbarComponent isMobile={args.isMobile} title={args.title} />
);

export const Toolbar = Template.bind({});
Toolbar.args = {
  isMobile: true,
  title: 'ホーム',
};
