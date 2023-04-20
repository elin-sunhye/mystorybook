import type { Meta, StoryObj } from '@storybook/react';

import { Gnb } from './Gnb';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Gnb> = {
  title: 'Component/Gnb',
  component: Gnb,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Gnb>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    
  },
};
