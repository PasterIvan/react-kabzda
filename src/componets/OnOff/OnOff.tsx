import React, {useState} from "react";

type OnOffType = {
    on: boolean
    onChange: (on: boolean) => void
}
const OnOff = (props: OnOffType) => {

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.on ? "green" : "white"
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: props.on ? "white" : "red"
    };
    const indicatorStyle = {
        width: "20px",
        height: "20px",
        borderRadius: "10px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.on ? "green" : "red"
    };

    return (
        <div>
            <div style={onStyle}
                 onClick={() => {props.onChange(true)}}>
                ON</div>
            <div style={offStyle}
                 onClick={() => {props.onChange(false)}}>
                OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}
export default OnOff;