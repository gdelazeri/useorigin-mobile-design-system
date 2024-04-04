import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./IconButton";

const meta = {
  title: "IconButton",
  component: IconButton,
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StarIcon: Story = {
  args: {
    icon: "star",
    color: "#0066ff",
    onPress: () => console.log("Star icon pressed"),
  },
};

export const CheckIcon: Story = {
  args: {
    icon: "checkbox-marked-circle",
    color: "#1b840f",
    onPress: () => console.log("Check icon pressed"),
  },
};