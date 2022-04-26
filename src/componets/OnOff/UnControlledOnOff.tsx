import React, {useState} from "react";

type UnControlledOnOffType = {
    onChange: (on: boolean)=>void
}
const UnControlledOnOff = (props:UnControlledOnOffType) => {

    let [on, setOn]=useState(false)

   const onStyle = {
       width: "30px",
       height: "20px",
       border: "1px solid black",
       display: "inline-block",
       padding: "2px",
       backgroundColor: on ? "green" : "white"
   };
   const offStyle = {
       width: "30px",
       height: "20px",
       border: "1px solid black",
       display: "inline-block",
       marginLeft: "5px",
       padding: "2px",
       backgroundColor: on ? "white" : "red"
   };
   const indicatorStyle = {
       width: "20px",
       height: "20px",
       borderRadius: "10px",
       border: "1px solid black",
       display: "inline-block",
       marginLeft: "5px",
       backgroundColor: on ? "green" : "red"
   };

   const onClicked =()=>{
       setOn(true)
       props.onChange(true)
   }
   const offClicked =()=>{
       setOn(false)
       props.onChange(false)
   }
    return (
        <div>
            <div style={onStyle} onClick={onClicked}>ON</div>
            <div style={offStyle} onClick={offClicked}>OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}
export default UnControlledOnOff;