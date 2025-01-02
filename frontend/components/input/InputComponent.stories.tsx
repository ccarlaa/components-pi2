import React from "react";
import InputComponent from ".";

export default {
  title: "Components/Input",
  component: InputComponent,
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: { type: "boolean" },
    },
    error: {
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
    label: "Label",
    placeholder: "Placeholder",
    supportText: "Support text",
  }, 
};
