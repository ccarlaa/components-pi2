import React from "react";
import ButtonIconComponent from "./index";

export default {
  title: "Components/ButtonIcon",
  component: ButtonIconComponent,
  tags: ["autodocs"],
  argTypes: {
    icon: {
      options: [
        "buoy",
        "adjustment",
        "oxygen",
        "temperature",
        "conductivity",
        "xicon",
        "ph",
        "reload",
      ],
      control: { type: "select" },
    },
  },
  decorators: [
    (Story: any) => (
      <div style={{ padding: 16 }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = {
  args: {
    variant: "buoy",
  },
};