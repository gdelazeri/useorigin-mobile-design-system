import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "./TextInput";
import { View } from "react-native";
import { PaperProvider } from "react-native-paper";

const meta = {
  title: "TextInput",
  component: TextInput,
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
  args: {
    label: 'Outlined',
    placeholder: 'Placeholder',
  },
};

export const OutlinedWithoutLabel: Story = {
  args: { },
};

export const OutlinedSmall: Story = {
  args: {
    label: 'Outlined',
    placeholder: 'Placeholder',
    size: 'small',
  },
};

export const OutlinedWithError: Story = {
  args: {
    label: 'Outlined',
    error: true,
    helperText: 'This is an error message',
  },
};

export const OutlinedWithHelperText: Story = {
  args: {
    label: 'Outlined',
    helperText: 'This is a helper text',
  },
};

export const OutlinedMultiline: Story = {
  args: {
    label: 'Outlined',
    multiline: true,
    maxRows: 3,
  },
};

export const Filled: Story = {
  args: {
    label: 'Filled',
    placeholder: 'Placeholder',
    variant: 'filled',
  },
};

export const FilledWithoutLabel: Story = {
  args: {
    variant: 'filled',
  },
};

export const FilledSmall: Story = {
  args: {
    label: 'Filled',
    placeholder: 'Placeholder',
    variant: 'filled',
    size: 'small',
  },
};

export const FilledWithError: Story = {
  args: {
    label: 'Filled',
    variant: 'filled',
    error: true,
    helperText: 'This is an error message',
  },
};

export const FilledWithHelperText: Story = {
  args: {
    label: 'Filled',
    variant: 'filled',
    helperText: 'This is a helper text',
  },
};

export const FilledMultiline: Story = {
  args: {
    label: 'Filled',
    variant: 'filled',
    multiline: true,
    maxRows: 6
  },
};

export const Standard: Story = {
  args: {
    label: 'Standard',
    placeholder: 'Placeholder',
    variant: 'standard',
  },
};

export const StandardWithoutLabel: Story = {
  args: {
    variant: 'standard',
  },
};

export const StandardSmall: Story = {
  args: {
    label: 'Standard',
    placeholder: 'Placeholder',
    variant: 'standard',
    size: 'small',
  },
};

export const StandardWithError: Story = {
  args: {
    label: 'Standard',
    variant: 'standard',
    error: true,
    helperText: 'This is an error message',
  },
};

export const StandardWithHelperText: Story = {
  args: {
    label: 'Standard',
    variant: 'standard',
    helperText: 'This is a helper text',
  },
};

export const StandardMultiline: Story = {
  args: {
    label: 'Standard',
    variant: 'standard',
    multiline: true,
    maxRows: 8
  },
};

export const TextInputWithMarginNone: Story = {
  args: {
    label: 'Margin None',
    placeholder: 'Placeholder',
    margin: 'none',
  },
  decorators: [
    (Story) => (
      <>
        <View style={{ height: 30, backgroundColor: '#f5baba' }} />
        <Story />
        <View style={{ height: 30, backgroundColor: '#f5baba' }} />
      </>
    ),
  ],
};

export const TextInputWithMarginDense: Story = {
  args: {
    label: 'Margin Dense',
    placeholder: 'Placeholder',
    margin: 'dense',
  },
  decorators: [
    (Story) => (
      <>
        <View style={{ height: 30, backgroundColor: '#f5baba' }} />
        <Story />
        <View style={{ height: 30, backgroundColor: '#f5baba' }} />
      </>
    ),
  ],
};

export const TextInputWithMarginNormal: Story = {
  args: {
    label: 'Margin Normal',
    placeholder: 'Placeholder',
    margin: 'normal',
  },
  decorators: [
    (Story) => (
      <>
        <View style={{ height: 30, backgroundColor: '#f5baba' }} />
        <Story />
        <View style={{ height: 30, backgroundColor: '#f5baba' }} />
      </>
    ),
  ],
};

export const TextInputWithTooltip: Story = {
  args: {
    label: 'Tooltip option',
    placeholder: 'Placeholder',
    tooltipText: 'This is a tooltip',
  },
  decorators: [
    (Story) => (
      <PaperProvider>
        <View style={{ paddingHorizontal: 16 }}>
          <Story />
        </View>
      </PaperProvider>
    )
  ],
};