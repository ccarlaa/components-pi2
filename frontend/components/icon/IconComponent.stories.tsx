import React from "react";
import IconComponent from "./index";
export default {
  title: "Components/Icon",
  component: IconComponent,
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
        "blueBuoy",
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
    icon: "buoy",
  },
};
