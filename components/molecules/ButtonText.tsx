import React from "react";
import Button from "../atoms/Button";
import Text from "../atoms/Text";

interface ButtonTextProps {
    text: string;
    onClick: () => void;
}

const ButtonText: React.FC<ButtonTextProps> = ({ text, onClick }) => (
    <Button onClick={onClick}>
        <Text>{text}</Text>
    </Button>
);

export default ButtonText;