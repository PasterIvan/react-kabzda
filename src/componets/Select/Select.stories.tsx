import React, {useState} from "react";
import {Select} from "./Select";

export default {
    title: 'Select',
    component: Select
}

export const ModeSelect = () => {
    const [value, setValue]=useState<boolean>(true)
    return <Select  value={'Users'}  onChange={()=>setValue(!value)}
                       items={[
                           {title:'dimych', value: 1},
                           {title:'vslera', value: 2},
                           {title:'artem', value: 3},
                       ]}
    />
}