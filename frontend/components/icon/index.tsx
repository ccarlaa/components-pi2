import React from "react";
import Image from "next/image";
import ph from '../../assets/icons/ph.svg';
import reload from '../../assets/icons/reload.svg';
import buoy from '../../assets/icons/buoy.svg';
import adjustments from '../../assets/icons/adjustments.svg';
import oxygen from '../../assets/icons/oxygen.svg';
import temperature from '../../assets/icons/temperature.svg';
import conductivity from '../../assets/icons/conductivity.svg';
import xicon from '../../assets/icons/xicon.svg';
import blueBuoy from '../../assets/icons/blueBuoy.svg';

type IconProps = {
    size?: number;
    className?: string;
    icon?: 
    "buoy" 
    | "adjustment" 
    | "oxygen" 
    | "temperature" 
    | "conductivity" 
    | "xicon"
    | "ph"
    | "reload"
    | "blueBuoy";
};

const IconComponent = ({
    size = 100,
    icon = "buoy",
    className = "",
}: IconProps) => {
    const iconType = (icon: string) =>  {
        switch (icon) {
            case "buoy":
                return <Image alt="" src={buoy} width={size} />;
            case "adjustment":
                return <Image alt="" src={adjustments} width={size} />;
            case "oxygen":
                return <Image alt="" src={oxygen} width={size} />;
            case "temperature":
                return <Image alt="" src={temperature} width={size} />;
            case "conductivity":
                return <Image alt="" src={conductivity} width={size} />;
            case "xicon":
                return <Image alt="" src={xicon} width={size} />;
            case "ph":
                return <Image alt="" src={ph} width={size} />;
            case "reload":
                return <Image alt="" src={reload} width={size} />;
            case "blueBuoy":
                return <Image alt="" src={blueBuoy} width={size} />;
            default:
                return <Image alt="" src={buoy} width={size} />;
        }
    }

    return (
        <div className={className}>
            {iconType(icon)}
        </div>
    );
};

export default IconComponent;
