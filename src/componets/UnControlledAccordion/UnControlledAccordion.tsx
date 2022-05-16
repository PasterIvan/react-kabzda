import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./Reducer";

type UnControlledAccordionPropsType = {
    titleValue: string

}

function UnControlledAccordion(props: UnControlledAccordionPropsType) {
    console.log("Accordion rendering")

        let [state, dispatch]=useReducer(reducer, {collapsed:false})

    return (
        <div>
            <UnControlledAccordionTitle
                title={props.titleValue}
                onClick={()=> { dispatch({type: TOGGLE_COLLAPSED}) }}
            />
            {!state.collapsed && <UnControlledAccotdionBody/>}
        </div>)

}

type UnControlledAccordionTitlePropsType = {
    title: string
    onClick: ()=>void
}

function UnControlledAccordionTitle(props: UnControlledAccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <h3 onClick={()=>props.onClick()}>-- {props.title} --</h3>
}

function UnControlledAccotdionBody() {
    console.log("AccotdionBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default UnControlledAccordion;