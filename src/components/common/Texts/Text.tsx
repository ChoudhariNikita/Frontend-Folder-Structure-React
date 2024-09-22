import React from "react";
import TextProps from "../../../types/interfaces/index";

const Text: React.FC<TextProps> = ({ level, children,className}) => {
    const Tag = level ? `h${level}` as keyof JSX.IntrinsicElements : 'p';
    return <Tag className={className}>{children}</Tag>;
};

export default Text;

