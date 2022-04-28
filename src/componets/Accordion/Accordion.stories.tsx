import React, {useState} from 'react';
import Accordion, {AccordionTitlePropsType} from './Accordion';
import {action} from "@storybook/addon-actions";


export default {
    title: 'Accordion',
    component: Accordion
    };

const callback = action('accordion mode change event fired')

export const MenuСollapsedAccordion = () => <Accordion titleValue={'Menu'} collapsed={true} onChange={callback} />;
export const UserUncollapsedAccordion = () => <Accordion titleValue={'Users'} collapsed={false} onChange={callback} />;

export const ModeAccordion = () => {
    const [value, setValue]=useState<boolean>(true)
    return <Accordion titleValue={'Users'} collapsed={value} onChange={()=>setValue(!value)}/>
};

