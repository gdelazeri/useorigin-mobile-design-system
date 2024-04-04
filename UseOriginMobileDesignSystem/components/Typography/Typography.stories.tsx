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
    color: '#ff0000',
    gutterBottom: true,
  }
};

export const h2Centralized: Story = {
  args: {
    children: "Headline 2",
    variant: 'h2',
    color: '#ff0000',
    gutterBottom: true,
    align: 'center'
  }
};

export const h3: Story = {
  args: {
    children: "Headline 3",
    variant: 'h3',
    color: '#00ff00'
  }
};

export const h3Right: Story = {
  args: {
    children: "Headline 3",
    variant: 'h3',
    color: '#00ff00',
    align: 'right'
  }
};

export const h4: Story = {
  args: {
    children: "Headline 4",
    variant: 'h4',
    color: '#0000ff',
    gutterBottom: true
  }
};

export const h4Left: Story = {
  args: {
    children: "Headline 4",
    variant: 'h4',
    color: '#0000ff',
    align: 'left'
  }
};

export const h5: Story = {
  args: {
    children: "Headline 5",
    variant: 'h5',
  }
};

export const h5Justified: Story = {
  args: {
    children: "Lorem ipsum dolor sit amet. Qui Quis dolores in distinctio pariatur sit saepe iure. Ea perferendis alias eos odio atque rem dolor tempore qui ratione repellat et recusandae eius. Qui suscipit nulla eum debitis fugiat ad officia sequi et dolores magnam. Ab unde dolores ex maxime dignissimos sed doloremque enim eos dicta numquam quo atque adipisci et odio natus.",
    variant: 'h5',
    align: 'justify'
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