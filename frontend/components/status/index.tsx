import React from 'react';
import { cva } from 'class-variance-authority';

type StatusProps = {    
    status: "on" | 'off' | 'low_power'
}

const statusVariants = cva(
    "w-3 h-3 rounded-full",
    {
      variants: {
        status: {
          on: "bg-green-400",
          off: "bg-red-400",
          low_power: "bg-warning-400",
        },
      },
    },
  );
  
const StatusComponent = ({status}: StatusProps) => {

    const statusText = (status: "on" | 'off' | 'low_power') => {
        switch (status) {
            case "on":
                return "Ativo"
            case "off":
                return "Offline"
            case "low_power":
                return "Bateria fraca"
            default:
                return "Desconhecido"
        }
    }

    return (
        <div className="flex gap-3 items-center">
            <p>{statusText(status)}</p>
            <circle className={statusVariants({ status })}></circle>
        </div>
    );
}

export default StatusComponent;