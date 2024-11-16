import React from "react";
import styles from "./widget.module.css";

interface Props {
    bgColor?: string;
    textColor?: string;
    heading?: string;
    headingSize?: string;
    subHeading?: string;
    children?: React.ReactNode;
}

const Widget: React.FC<Props> = ({
    bgColor,
    textColor,
    heading,
    headingSize,
    subHeading,
    children
}) => {
    return(
        <div className={styles.widgetContainer} style={{
            color: textColor,
            backgroundColor: bgColor,
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