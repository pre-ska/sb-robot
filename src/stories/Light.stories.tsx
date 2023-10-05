import { Meta, StoryObj } from '@storybook/react';

import Light from './Light';

const meta: Meta<typeof Light> = {
  component: Light,
  title: 'Light',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['green', 'yellow', 'red'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    variant: 'green',
  },
};

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
export const ARobot: Story = {
  render: (args) => (
    <div
      style={{
        background: 'gray',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        padding: 10,
        border: '1px solid black',
        width: 'max-content',
      }}
    >
      <Light variant='red' />
      <Light variant='yellow' />
      <Light variant='green' />
    </div>
  ),
};
