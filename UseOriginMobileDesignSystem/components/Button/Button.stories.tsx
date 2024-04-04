import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Button",
  component: Button,
  args: {
    text: "Button Text",
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {};

export const TextLoading: Story = {
  args: {
    loading: true,
  },
};

export const TextWithIcon: Story = {
  args: {
    ...Text.args,
    icon: 'arrow-left',
  },
};

export const TextDisabled: Story = {
  args: {
    ...Text.args,
    disabled: true,
  },
};

export const TextDisabledWithIcon: Story = {
  args: {
    ...Text.args,
    disabled: true,
    icon: 'arrow-left',
  },
};

export const Outlined: Story = {
  args: {
    ...Text.args,
    variant: 'outlined',
  },
};

export const OutlinedLoading: Story = {
  args: {
    ...Text.args,
    variant: 'outlined',
    loading: true
  },
};

export const OutlinedWithRightIcon: Story = {
  args: {
    ...Text.args,
    variant: 'outlined',
    icon: 'arrow-right',
    iconPosition: 'right',
  },
};

export const OutlinedDisabled: Story = {
  args: {
    ...Text.args,
    variant: 'outlined',
    disabled: true,
  },
};

export const OutlinedDisabledWithIcon: Story = {
  args: {
    ...Text.args,
    variant: 'outlined',
    disabled: true,
    icon: 'arrow-left',
  },
};

export const Contained: Story = {
  args: {
    ...Text.args,
    variant: 'contained',
  },
};

export const ContainedLoading: Story = {
  args: {
    ...Text.args,
    variant: 'contained',
    loading: true
  },
};

export const ContainedWithIcon: Story = {
  args: {
    ...Text.args,
    variant: 'contained',
    icon: 'arrow-right',
    iconPosition: 'right',
  },
};

export const ContainedDisabled: Story = {
  args: {
    ...Text.args,
    variant: 'contained',
    disabled: true
  },
};

export const ContainedDisabledWithIcon: Story = {
  args: {
    ...Text.args,
    variant: 'contained',
    icon: 'trash-can-outline',
    disabled: true
  },
};

