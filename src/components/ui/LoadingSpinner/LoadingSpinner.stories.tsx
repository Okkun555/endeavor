import { ComponentMeta, ComponentStory } from '@storybook/react';
import LoadingSpinnerComponent from './LoadingSpinner';

export default {
  title: 'LoadingSpinner',
  component: LoadingSpinnerComponent,
} as ComponentMeta<typeof LoadingSpinnerComponent>;

const Template: ComponentStory<typeof LoadingSpinnerComponent> = () => (
  <LoadingSpinnerComponent />
);

export const LoadingSpinner = Template.bind({});
