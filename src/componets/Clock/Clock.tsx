import React, {useEffect, useState} from "react";

type PropsType = {

}

const get2digitsString = (x:number) => x < 10 ? "0" + x : x

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(()=>{
        setInterval(()=>{
            setDate(new Date())
        }, 1000)
    }, [])

    return <div>
        <span>{get2digitsString(date.getHours())}</span>
        :
        <span>{get2digitsString(date.getMinutes())}</span>
        :
        <span>{get2digitsString(date.getSeconds())}</span>
    </div>
}