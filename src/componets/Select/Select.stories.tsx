import React, {useState} from "react";
import {Select} from "./Select";

export default {
    title: 'Select',
    component: Select
}

const SelectMemo = React.memo(Select)

export const ModeSelect = () => {
    const [value, setValue]=useState('2')
    return <SelectMemo  value={value}
                    onChange={setValue}
                       items={[
                           {title:'Dimych', value: "1"},
                           {title:'Valera', value: "2"},
                           {title:'Artem', value: "3"},
                       ]}
    />
}