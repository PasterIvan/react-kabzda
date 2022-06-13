import React, {useEffect, useState} from "react";

const get2digitsString = (x:number) => x < 10 ? "0" + x : x

export const Clock = () => {
    const [date, setDate] = useState(new Date())

    useEffect(()=>{

        const intervalId = setInterval(()=>{
            console.log('TICK')
            setDate(new Date())
        }, 1000)

        return ()=>{
            clearInterval(intervalId)
        }

    }, [])

    return <div>
        <span>{get2digitsString(date.getHours())}</span>
        :
        <span>{get2digitsString(date.getMinutes())}</span>
        :
        <span>{get2digitsString(date.getSeconds())}</span>
    </div>
}