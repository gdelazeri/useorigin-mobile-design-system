import type { Meta, StoryObj } from "@storybook/react";
import { PasswordInput } from "./PasswordInput";
import { View } from "react-native";

const meta = {
  title: "PasswordInput",
  component: PasswordInput,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    )
  ]
} satisfies Meta<typeof PasswordInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
  args: {
    label: 'Password',
    placeholder: 'Placeholder',
  },
};

export const OutlinedWithStrength: Story = {
  args: {
    label: 'Password',
    placeholder: 'Placeholder',
    showStrengthIndicator: true,
  },
};

export const OutlinedWithRequirements: Story = {
  args: {
    label: 'Password',
    placeholder: 'Placeholder',
    showRequirements: true,
  },
};

export const OutlinedWithRequirementsAndStrength: Story = {
  args: {
    label: 'Password',
    placeholder: 'Placeholder',
    showRequirements: true,
    showStrengthIndicator: true,
  },
};

export const Filled: Story = {
  args: {
    label: 'Password',
    placeholder: 'Placeholder',
    variant: 'filled'
  },
};

export const FilledWithStrength: Story = {
  args: {
    label: 'Password',
    placeholder: 'Placeholder',
    showStrengthIndicator: true,
  },
};

export const FilledWithRequirements: Story = {
  args: {
    label: 'Password',
    placeholder: 'Placeholder',
    showRequirements: true,
  },
};

export const FilledWithRequirementsAndStrength: Story = {
  args: {
    label: 'Password',
    placeholder: 'Placeholder',
    showRequirements: true,
    showStrengthIndicator: true,
  },
};

export const Standard: Story = {
  args: {
    label: 'Password',
    placeholder: 'Placeholder',
    variant: 'standard'
  },
};

export const StandardWithStrength: Story = {
  args: {
    label: 'Password',
    placeholder: 'Placeholder',
    showStrengthIndicator: true,
  },
};

export const StandardWithRequirements: Story = {
  args: {
    label: 'Password',
    placeholder: 'Placeholder',
    showRequirements: true,
  },
};

export const StandardWithRequirementsAndStrength: Story = {
  args: {
    label: 'Password',
    placeholder: 'Placeholder',
    showRequirements: true,
    showStrengthIndicator: true,
  },
};