import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import OnOff from './OnOff';


export default {
    title: 'OnOff',
    component: OnOff
    };

const OnOffMemo = React.memo(OnOff)

export const OnMode = () => <OnOffMemo on={true} onChange={x=>x} />;
export const OffMode = () => <OnOffMemo on={false} onChange={x=>x} />;
export const ModeChange = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOffMemo on={value} onChange={setValue}/>
};

