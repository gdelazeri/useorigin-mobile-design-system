import type { Meta, StoryObj } from "@storybook/react";
import { PasswordInput } from "./PasswordInput";

const meta = {
  title: "PasswordInput",
  component: PasswordInput,
} satisfies Meta<typeof PasswordInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
  args: {
    label: 'Password',
    placeholder: 'Placeholder',
  },
};

export const Filled: Story = {
  args: {
    label: 'Password',
    placeholder: 'Placeholder',
    variant: 'filled'
  },
};

export const Standard: Story = {
  args: {
    label: 'Password',
    placeholder: 'Placeholder',
    variant: 'standard'
  },
};