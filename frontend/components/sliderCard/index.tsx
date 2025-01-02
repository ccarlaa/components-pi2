import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export type SliderCardProps = {
  title?: string;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number[];
  onChange?: (value: number[]) => void
};

const SliderCardComponent = ({
  title = "Titulo padrão",
  min = 0,
  max = 100,
  step = 1,
  defaultValue,
  onChange
}: SliderCardProps) => {
  const [range, setRange] = useState<number[]>(defaultValue || [min, max]);

  const handleRangeChange = (newRange: number[]) => {
    setRange(newRange);
    onChange?.(newRange);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <h1 className=" text-lg font-semibold text-gray-900">{title}</h1>
      <div className="w-full flex justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-md text-gray-500">Mínimo aceito</p>
          <h6 className="text-md font-semibold text-primary-700">{range[0]}</h6>
        </div>
        <div className="flex flex-col gap-1 ">
          <p className="text-md text-gray-500">Máximo aceito</p>
          <h6 className="text-md font-semibold text-primary-700 text-right">{range[1]}</h6>
        </div>
      </div>
      <Slider
        defaultValue={defaultValue}
        value={range}
        max={max}
        min={min}
        step={step}
        onValueChange={handleRangeChange}
      />
    </div>
  );
}

export default SliderCardComponent;