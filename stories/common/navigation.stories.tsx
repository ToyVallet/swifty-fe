import { Navigation } from '@/app/components/common';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Navigation> = {
  title: 'COMMON/Navigation',
  component: Navigation,
  argTypes: {
    hasBackButton: { control: 'boolean' },
    isLogo: { control: 'boolean' },
    title: { control: 'text' },
  },
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Navigation>;

export const Default: Story = {
  args: { hasBackButton: false },
};

export const Back_Button: Story = {
  args: { hasBackButton: true },
};

export const Back_Button_Not_Logo: Story = {
  args: { hasBackButton: true, isLogo: false, title: '우리학교찾기' },
};
