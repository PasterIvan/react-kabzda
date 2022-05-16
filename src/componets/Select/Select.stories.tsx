import React, {useState} from "react";
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    component: Select
}

export const ModeSelect = () => {
    const [value, setValue]=useState('2')
    return <Select  value={value}
                    onChange={setValue}
                       items={[
                           {title:'Dimych', value: "1"},
                           {title:'Valera', value: "2"},
                           {title:'Artem', value: "3"},
                       ]}
    />
}