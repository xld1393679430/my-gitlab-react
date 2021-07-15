/** @format */

import {useEffect, useState} from 'react'
import reactDom from 'react-dom'

const Page = () => {
    const [number, setNumber] = useState(0)

    useEffect(() => {
        console.log('current number: ', number)
    }, [number])

    const handleClick = () => {
        reactDom.flushSync(() => {
            setNumber(2)
        })

        setNumber(3)

        setTimeout(() => {
            setNumber(4)
        }, 100)
    }

    return (
        <div>
            <span>{number}</span>
            <button onClick={handleClick}>按钮点击</button>
        </div>
    )
}

export default Page
