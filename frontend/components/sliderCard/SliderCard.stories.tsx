import { Meta, StoryFn } from "@storybook/react";
import SliderCardComponent, { SliderCardProps } from ".";
import React from "react";
import { action } from '@storybook/addon-actions';

export default {
  title: "Components/SliderCard",
  component: SliderCardComponent,
  argTypes: {
    title: { control: "text" },
    min: { control: "number" },
    max: { control: "number" },
    step: { control: "number" },
    defaultValue: {},
    onChange: { action: "onChange" },
  },
} satisfies Meta<SliderCardProps>;

const Template: StoryFn<SliderCardProps> = (args) => {
  const [range, setRange] = React.useState<number[]>(
    args.defaultValue || [args.min || 0, args.max || 100]
  );

  const handleValueChange = (value: number[]) => {
    setRange(value);
    args.onChange?.(value);
  };

  return <SliderCardComponent {...args} defaultValue={range} onChange={handleValueChange} />;
};

export const Default = Template.bind({});
Default.args = {
  title: "Faixa de valores",
  min: 0,
  max: 100,
  step: 1,
  onChange: (value: number[]) =>  action("Slider Value Changed")(value),  
  defaultValue: [20, 80],
};
