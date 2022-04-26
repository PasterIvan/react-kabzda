import React, {useState} from "react";

type UnControlledAccordionPropsType = {
    titleValue: string

}

function UnControlledAccordion(props: UnControlledAccordionPropsType) {
    console.log("Accordion rendering")

        let [collapsed, setCollapsed]=useState(true)

    return (
        <div>
            <UnControlledAccordionTitle
                title={props.titleValue}
                onClick={()=> {setCollapsed(!collapsed)}}
            />
            {!collapsed && <UnControlledAccotdionBody/>}
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