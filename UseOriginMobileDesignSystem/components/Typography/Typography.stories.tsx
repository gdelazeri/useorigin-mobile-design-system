import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";

const meta = {
  title: "Typography",
  component: Typography
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const h1: Story = {
  args: {
    children: "Headline 1",
    variant: 'h1'
  }
};

export const h2: Story = {
  args: {
    children: "Headline 2",
    variant: 'h2',
    color: '#ff0000'
  }
};

export const h3: Story = {
  args: {
    children: "Headline 3",
    variant: 'h3',
    color: '#00ff00'
  }
};

export const h4: Story = {
  args: {
    children: "Headline 4",
    variant: 'h4',
    color: '#0000ff'
  }
};

export const h5: Story = {
  args: {
    children: "Headline 5",
    variant: 'h5',
  }
};

export const h6: Story = {
  args: {
    children: "Headline 6",
    variant: 'h6',
    color: '#ff00ff'
  }
};

export const subtitle1: Story = {
  args: {
    children: "Subtitle 1",
    variant: 'subtitle1',
  }
};

export const subtitle2: Story = {
  args: {
    children: "Subtitle 2",
    variant: 'subtitle2',
  }
};

export const body1: Story = {
  args: {
    children: "Body 1",
    variant: 'body1',
    color: '#000fff'
  }
};

export const body2: Story = {
  args: {
    children: "Body 2",
    variant: 'body2',
    color: '#ff0000'
  }
};