import React from "react";

interface Props extends React.HTMLProps<HTMLButtonElement> {
    id?: string;
    borderWidth?: string;
    borderColor?: string;
    bgColor?: string;
    fontColor?: string;
    fontSize?: string;
    height?: string;
    width?: string;
    radius?: string;
    onClick?: () => void;
    children?: React.ReactNode;
  }
  
  const Button: React.FC<Props> = ({
    id,
    borderWidth,
    borderColor,
    bgColor,
    fontColor,
    fontSize,
    height,
    width,
    radius,
    onClick,
    children,
  }) => {
    return (
      <button
        id={id}
        style={{
          borderWidth: borderWidth,
          borderColor: borderColor,
          backgroundColor: bgColor,
          color: fontColor,
          fontSize: fontSize,
          fontWeight: 700,
          height: height,
          width: width,
          borderRadius: radius
        }}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  
  export default Button;