import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
  component: Button,
  loaders: (i) => {
    console.log(i);
    
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {args:{color: "primary", text: "TestButton", iconName: 'Delete', iconPosition: 'center'}};