import React from "react"
import IconComponent from "../icon"
import { cva } from "class-variance-authority";

type ButtonIconProps = {
    variant?: "default" | "outline",
    disabled?: boolean
    icon?: "buoy" | "adjustment" | "oxygen" | "temperature" | "conductivity" | "xicon" | "ph" | "reload"
}

const buttonIconVariants = cva(
    "flex w-full h-14 max-w-14 items-center justify-center rounded-md active:outline-none",
    {
      variants: {
        variant: {
          default: "bg-primary-100 hover:bg-primary-200 focus:bg-primary-300",
          outline: "bg-white border border-gray-200 hover:bg-gray-100 focus:bg-gray-200",
        },
        disabled: {
          true: "cursor-not-allowed opacity-70 hover:none focus:none",
        },
      },
    },
  );

const iconVariants = cva('',
    {
        variants: {
            icon: {
                "buoy": "",
                "adjustment": "",
                "oxygen": "",
                "temperature": "",
                "conductivity": "",
                "xicon": "",
                "ph": "",
                "reload": "hover:rotate-180 transition-all ease-in-out duration-300",
            }
        }
    }
)

const ButtonIconComponent = ({
    icon = "buoy",
    variant = "default",
    disabled = false
}: ButtonIconProps) => {

    return (
        <button className={buttonIconVariants({ variant, disabled })}>
            <IconComponent icon={icon}  size={120} className={iconVariants({ icon })}/>
        </button>
    )
}

export default ButtonIconComponent