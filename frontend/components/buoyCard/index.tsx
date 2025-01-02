import React from 'react';  
import IconComponent from '../icon';
import StatusComponent from '../status';
import { Skeleton } from "@/components/ui/skeleton";

type BuoyCardProps = {
    name: string;
    status: "on" | 'off' | 'low_power';
    loading: boolean;
}

const BuoyCard = ({
    name,
    status,
    loading
}: BuoyCardProps) => {
    return (
        <>
            {
            !loading ?
            <div className="w-full flex flex-col gap-2 cursor-pointer items-end h-fit p-4 rounded-2xl bg-white border border-gray-200 hover:bg-gray-100">
                <IconComponent icon="blueBuoy" size={30} />
                <div className='w-full flex flex-col gap-2'>
                    <h1 className='text-gray-900 text-2xl font-medium'>{name}</h1>
                    <StatusComponent status={status} />
                </div>
            </div>
            :
            <Skeleton className="w-full h-[140px] rounded-2xl" />
            }
        </>
    )
}

export default BuoyCard;