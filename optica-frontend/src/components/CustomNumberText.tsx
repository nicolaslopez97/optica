import React from "react";
import {Typography} from 'antd';

interface CustomNumberTextProps {
    value: number;
    angle?: boolean
}

export const CustomNumberText:React.FC<CustomNumberTextProps> = ({value=0, angle=false}) => {

    return (
        value ?
            <Typography.Text>
                {(value > 0 && !angle) ? `+${value}`: `${value}`}{angle ? "°": ""}
            </Typography.Text> : <Typography.Text>-</Typography.Text>)
}