import React from "react";

interface TextProps {
    children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ children }) => <span>{children}</span>;

export default Text;