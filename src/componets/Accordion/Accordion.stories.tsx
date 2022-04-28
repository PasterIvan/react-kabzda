import React, {useState} from 'react';
import Accordion, {AccordionTitlePropsType} from './Accordion';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from "@storybook/addon-actions";



export default {
    title: 'Accordion',
    component: Accordion
    };

const callback = action ('accordion mode change event fired');
const onClickCallback = action('some item was clicked')
const callbackProps = {
    onChange: callback,
    onClick: onClickCallback
}

const Template: ComponentStory<typeof Accordion> =(args)=> <Accordion {...args} />

export const MenuСollapsedAccordion = Template.bind({});
MenuСollapsedAccordion.args = {
    ...callbackProps,
    titleValue: 'Menu',
    collapsed: true,
};

export const UserUncollapsedAccordion = Template.bind({});
UserUncollapsedAccordion.args = {
    ...callbackProps,
    titleValue: 'Users',
    collapsed: false,
};

const ModeChanging: ComponentStory<typeof Accordion> =(args)=> {
    const [value, setValue]=useState<boolean>(true)
    return <Accordion {...args} collapsed={value} onChange={()=>setValue(!value)}/>
}

export const ModeAccordion = ModeChanging.bind({});
ModeAccordion.args = {
    ...callbackProps,
    titleValue: 'Users',
};

