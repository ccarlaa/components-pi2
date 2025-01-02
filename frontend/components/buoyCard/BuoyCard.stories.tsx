import React from "react";
import BuoyCard from "./index";

export default {
  title: "Components/BuoyCard",
  component: BuoyCard,
  tags: ["autodocs"],
  argTypes: {
    loading: {
      control: { type: "boolean" },
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
    name: "Buoy Name",
    status: "on",
    loading: false,
  },
};
