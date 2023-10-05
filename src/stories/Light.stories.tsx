import { Meta, StoryObj } from '@storybook/react';

import Light from './Light';

const meta: Meta<typeof Light> = {
  component: Light,
  title: 'Light',
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};

export const Yellow: Story = {
  args: {
    variant: 'yellow',
  },
};

export const Red: Story = {
  args: {
    variant: 'red',
  },
};

// custom render
export const Another: Story = {
  render: (args) => (
    <div>
      <Light variant='red' />
      <Light variant='yellow' />
      <Light variant='green' />
    </div>
  ),
};
