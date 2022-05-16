import React, {useState, KeyboardEvent, useEffect} from "react";
import style from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItems = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === "ArrowDown"
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value);
                        break
                    }
                }
            }
        }

        if (e.key === "Enter" || e.key === "Escape") {
            setActive(false)
        }
    }

    return (
        <div className={style.select + " "} onKeyUp={onKeyUp} tabIndex={0}>
            <span className={style.main} onClick={toggleItems}>
                {selectedItems && selectedItems.title}
            </span>
            {
                active &&
                <div className={style.items}>
                    {props.items.map(i =>
                        <div
                            onMouseEnter={() => {setHoveredElementValue(i.value)}}
                            className={style.item + " " + (hoveredItem === i ? style.selected : "")}
                            onClick={ () => {onItemClick(i.value)} }
                             key={i.value}
                        >{i.title}
                        </div>)}
                </div>
            }
        </div>
    )
}
