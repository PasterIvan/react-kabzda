import React, {useState} from 'react';
import Accordion from './Accordion';
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion',
    component: Accordion
};

const callback = action('accordion mode change event fired');
const onClickCallback = action('some item was clicked');

const AccordionMemo = React.memo(Accordion)

export const MenuCollapsedMode = () => <AccordionMemo titleValue={'Menu'}
                                                      collapsed={true}
                                                      onChange={callback}
                                                      onClick={onClickCallback}
                                                      items={[]}
/>

export const UserUncollapsedMode = () => <AccordionMemo titleValue={'Users'}
                                                        collapsed={false}
                                                        onChange={callback}
                                                        onClick={onClickCallback}
                                                        items={[
                                                            {title: 'dimych', value: 1},
                                                            {title: 'vslera', value: 2},
                                                            {title: 'artem', value: 3},
                                                        ]}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)

    return <AccordionMemo titleValue={'Users'}
                          collapsed={value}
                          onChange={() => setValue(!value)}
                          onClick={(value) => {
                              alert(`ты нажал на ${value}`)
                          }}
                          items={[
                              {title: 'dimych', value: 1},
                              {title: 'vslera', value: 2},
                              {title: 'artem', value: 3},
                          ]}
    />
}
