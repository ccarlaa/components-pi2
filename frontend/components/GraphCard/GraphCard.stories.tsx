import React from "react";
import GraphCardComponent from "./index";

export default {
  title: "Components/GraphCard",
  component: GraphCardComponent,
  tags: ["autodocs"],
  argTypes: { 
    icon: {
      control: { type: "select" },
      options: ["buoy", "adjustment", "oxygen", "temperature", "conductivity", "xicon", "ph", "reload", "blueBuoy"],
    },
    error: {
      control: { type: "boolean" },
    },
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
    title: "titulo",
  },
}
