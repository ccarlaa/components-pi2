import IconComponent from "../icon"
import { Skeleton } from "@/components/ui/skeleton";

type GraphCardProps = {
    icon?: "buoy" | "adjustment" | "oxygen" | "temperature" | "conductivity" | "xicon" | "ph" | "reload" | "blueBuoy",
    Children?: React.ReactNode,
    title: string,
    loading?: boolean,
    error?: boolean
}

const GraphCardComponent = ({
    icon = "oxygen",
    title,
    Children,
    loading,
    error
}: GraphCardProps) => {
    return (
        <>
        {
            loading ?
            <Skeleton className="w-full  h-[460px] rounded-2xl" />
            :
            error ?
            <div className="w-full flex flex-col gap-2 h-[460px] p-6 rounded-xl bg-white border border-gray-200">
                <div className="w-full flex flex-row items-center">
                    <IconComponent icon={icon} size={50} />
                    <h1 className="text-gray-900 text-2xl font-medium">{title}</h1>
                </div>
                <div className="w-full flex h-full pb-16 flex-col justify-center gap-2">
                    <h1 className="text-gray-900 text-4xl font-semibold text-center">&lt;Erro&gt;</h1>
                    <p className="text-gray-500 text-md text-center">&lt;Não foi possível carregar os dados&gt;</p>
                </div>
            </div>
            :
            <div className="w-full flex flex-col gap-2 h-60 p-6 rounded-xl bg-white border border-gray-200 ">
                <div className="w-full flex flex-row items-center">
                    <IconComponent icon={icon} size={50} />
                    <h1 className="text-gray-900 text-2xl font-medium">{title}</h1>
                </div>
                {Children}
            </div>
        }
        </>
    )
}

export default GraphCardComponent;