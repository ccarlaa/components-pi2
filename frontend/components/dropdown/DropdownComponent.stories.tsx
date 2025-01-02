import React from "react";
import DropdownComponent from "./index";
export default {
  title: "Components/Dropdown",
  component: DropdownComponent,
  tags: ["autodocs"],
  argTypes: {
    disabled: {
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

const people: { id: number; name: string }[] = [
    { id: 1, name: 'Tom Cook' },
    { id: 2, name: 'Wade Cooper' },
    { id: 3, name: 'Tanya Fox' },
    { id: 4, name: 'Arlene Mccoy' },
    { id: 5, name: 'Devon Webb' },
  ]

export const Default = {
  args: {
    options: people,
    setOption: () => {},
  }, 
};
