import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: ()=>void
}

function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")

    return (
        <div>
        <AccordionTitle title={props.titleValue}
                        onChange={props.onChange}
        />
            {!props.collapsed && <AccotdionBody />}
    </div>)
}
export type AccordionTitlePropsType = {
    title: string
    onChange: ()=>void
}
function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <h3 onClick={(e)=>props.onChange()}>-- {props.title} --</h3>
}

function AccotdionBody() {
    console.log("AccotdionBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}
export default Accordion;