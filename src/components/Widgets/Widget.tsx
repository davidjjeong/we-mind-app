import React from "react";
import styles from "./widget.module.css";
import { minPointSizeCallback } from "recharts/types/util/BarUtils";

interface Props {
    width?: string;
    height?: string;
    className?: string;
    bgColor?: string;
    bgColorTwo?: string;
    gradient?: boolean;
    opacity?: string;
    textColor?: string;
    children?: React.ReactNode;
}

const Widget: React.FC<Props> = ({
    width,
    height,
    className,
    bgColor,
    bgColorTwo,
    gradient,
    opacity,
    textColor,
    children
}) => {
    return(
        <div className={`${className} ${styles.widgetContainer}`}
            style={gradient ? {
            color: textColor,
            background: `linear-gradient(180deg, ${bgColor} 25%, ${bgColorTwo})`,
            opacity: opacity,
            height: `${height}`,
            width: `min(${width}, 100vw-40px)`,
        } : {
            color: textColor,
            backgroundColor: bgColor,
            opacity: opacity,
            height: `${height}`,
            width: `min(${width}, 100vw-40px)`,
        }}
        >
            {children}
        </div>
    );
}

export default Widget;