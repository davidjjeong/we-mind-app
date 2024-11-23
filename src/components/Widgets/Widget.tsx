import React from "react";
import styles from "./widget.module.css";

interface Props {
    width?: Number;
    className?: string;
    bgColor?: string;
    opacity?: string;
    textColor?: string;
    heading?: string;
    headingSize?: string;
    subHeading?: string;
    children?: React.ReactNode;
}

const Widget: React.FC<Props> = ({
    width,
    className,
    bgColor,
    opacity,
    textColor,
    heading,
    headingSize,
    subHeading,
    children
}) => {
    return(
        <div className={`${className} ${styles.widgetContainer} w-[min(${width}px,100vw)]`} style={{
            color: textColor,
            backgroundColor: bgColor,
            opacity: opacity,
        }}
        >
            <h2 style={{
                fontSize: headingSize,
            }} className="font-bold">{heading}</h2>
            <h3>{subHeading}</h3>
            {children}
        </div>
    );
}

export default Widget;