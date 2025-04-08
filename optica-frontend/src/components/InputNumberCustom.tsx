import React from "react";
import { InputNumber } from "antd";

interface CustomInputNumberProps {
    value?: number;
    onChange?: (value: number | null) => void;
    precision?: number;
    style?: React.CSSProperties;
    angle?: boolean
}

export const CustomInputNumber: React.FC<CustomInputNumberProps> = (
    {value, onChange, precision = 2, style = { width: "100%", textAlign: "right" }, angle = false}) => {
    return (
        <InputNumber
            style={style}
            precision={precision}
            value={value}
            onChange={onChange}
            formatter={(val) => {
                if (val === undefined || val === null) return "0°"; // Default case
                const numericValue = Number(val.toString().replace(".00", ""));
                return `${(numericValue > 0 && !angle)? "+" : ""}${numericValue}${angle ? "°": ""}`;
            }}
        />
    );
};
