import React from "react";
import StatusComponent from "./index";

export default {
  title: "Components/Status",
  component: StatusComponent,
  tags: ["autodocs"],
  argTypes: { 
    status: {
      control: { type: "select" },
      options: ["on", "off", "low_power"],
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
    status: "on",
  },
}
