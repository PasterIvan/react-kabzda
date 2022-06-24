import React from "react";
import {ClockViewPropsType} from "./Clock";

const get2digitsString = (x:number) => x < 10 ? "0" + x : x

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return (
            <>
                <span>{get2digitsString(date.getHours())}</span>
                :
                <span>{get2digitsString(date.getMinutes())}</span>
                :
                <span>{get2digitsString(date.getSeconds())}</span>
            </>
        )
}