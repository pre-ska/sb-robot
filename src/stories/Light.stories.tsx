import { Meta, StoryObj } from '@storybook/react';

import Light from './Light';

const meta: Meta<typeof Light> = {
  component: Light,
  title: 'Components/Light',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    variant: 'green',
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['green', 'yellow', 'red'],
    },
  },
};

export const Yellow: Story = {
  args: {
    variant: 'yellow',
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['green', 'yellow', 'red'],
    },
  },
};

export const Red: Story = {
  args: {
    variant: 'red',
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['green', 'yellow', 'red'],
    },
  },
};

// custom render

/** Robot comment - next to story in code, visible under title in Storybook docs */
export const ARobot: Story = {
  render: () => (
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
