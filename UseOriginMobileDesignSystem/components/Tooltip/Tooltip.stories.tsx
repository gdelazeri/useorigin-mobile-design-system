import type { Meta, StoryObj } from "@storybook/react";
import { Icon, IconButton, PaperProvider } from "react-native-paper";
import { Text, View } from "react-native";
import { Tooltip } from "./Tooltip";

const meta = {
  title: "Tooltip",
  decorators: [
    (Story) => (
      <PaperProvider>
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
          <Story />
        </View>
      </PaperProvider>
    ),
  ],
  component: Tooltip,
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const tooltipWithIcon: Story = {
  args: {
    children: <IconButton icon="camera" selected size={24} onPress={() => {}} />,
    title: 'Tooltip title'
  }
};

export const tooltipWithText: Story = {
  args: {
    children: <Text>Text</Text>,
    title: 'Tooltip title'
  }
};