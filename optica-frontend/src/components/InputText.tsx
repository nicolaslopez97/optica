import React, {useEffect, useState} from "react";
import { Input } from "antd";

interface CustomInputTextProps {
    value?: number;
    style?: React.CSSProperties;
    suffix?: string;
    onChange?: (val: any) => void;
}

export const InputText: React.FC<CustomInputTextProps> = (
    {value, style = { width: "100%", textAlign: "left" }, suffix = "", onChange}) => {

    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        const val = value ?? 0;
        setInputValue(suffix ? `${val} ${suffix}` : String(val));
    }, [value, suffix]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value;
        setInputValue(raw);

        const num = parseFloat(raw.replace(suffix, "").trim());
        if (!isNaN(num) && onChange) {
            onChange(num);
        }
    };

    return (
        <Input
            style={style}
            value={inputValue}
            onChange={handleChange}
        />
    );
};
