import { cva } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";

type InputProps = {
    label?: string;
    placeholder?: string;
    value?: string;
    className?: string;
    disabled?: boolean;
    error?: boolean;
    supportText?: string;
    onChangeText?: (text: string) => void;
}

const containerVariants = cva(
  "flex h-14 focus:outline-none rounded-md flex-row items-center hover:bg-gray-100 justify-center gap-2 border border-gray-200 bg-white px-4",
  {
    variants: {
      disabled: {
        true: "opacity-70 cursor-not-allowed",
        false: "",
      },
      error: {
        true: "border-error-400",
        false: "focus:border-primary-400",
      },
    },
  },
);


const InputComponent = ({
  label,
  placeholder,
  value,
  className,
  disabled = false,
  error = false,
  supportText,
  onChangeText,
  ...rest
}: InputProps) => {

  const inputStyle = twMerge(containerVariants({ disabled, error }), className);

  return (
    <div className="flex flex-col gap-2" {...rest}>
        <p className="text-md font-bold text-gray-900">{label}</p>
        <input
          className={inputStyle}
          value={value}
          disabled={disabled}
          placeholder={placeholder}
          onChange={(e: any) => {
            if (onChangeText) onChangeText(e.target.value);
          }}
        />
      {supportText && (
        <div className="flex flex-row items-center gap-2">
          <p className={`font-medium text-md text-gray-900 ${error ? "text-error-500" : ""}`}>
            {supportText}
          </p>
        </div>
      )}
    </div>
  );
};

export default InputComponent;
