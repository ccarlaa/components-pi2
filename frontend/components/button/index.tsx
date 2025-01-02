import React from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  variant?: "default" | "outline";
  disabled?: boolean;
  label: string;
  className?: string
};

const buttonVariants = cva(
  "flex w-full h-14 items-center justify-center rounded-md active:outline-none shadow-md",
  {
    variants: {
      variant: {
        default: "bg-primary-600 hover:bg-primary-500 focus:bg-primary-700 text-white",
        outline: "bg-white border border-gray-200 hover:bg-gray-100 focus:bg-gray-200 text-gray-600",
      },
      disabled: {
        true: "cursor-not-allowed opacity-70 hover:none focus:none",
      },
    },
  },
);

const ButtonComponent = ({
  variant = "default",
  label,
  disabled = false,
  className
}: ButtonProps) => {
  const buttonStyle = twMerge(buttonVariants({ variant, disabled }), className);

  return (
    <button className={buttonStyle} disabled={disabled}>
      <label className="text-md font-bold">{label}</label>
    </button>
  )
}

export default ButtonComponent;