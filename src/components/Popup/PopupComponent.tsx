import React from "react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

interface Props {
    popupType?: string;
    className?: string;
    children?: React.ReactNode;
}

const Popup: React.FC<Props> = ({
    popupType,
    className,
    children,
}) => {
    if(popupType == "error"){
        return(
            <div className={`flex justify-start gap-x-2 p-4 text-[18px]
            font-bold rounded-lg text-[#FFF] bg-[rgb(255,90,95)] ${className}`}>
                <ExclamationTriangleIcon className="size-8" />
                {children}
            </div>
        );
    }
}

export default Popup;