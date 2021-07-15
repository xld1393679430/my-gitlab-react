/** @format */

import React, {useState, useEffect} from 'react'
const Page = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        // const timer = setInterval(() => {
        //     setCount(count + 1)
        // }, 1000)
        // return () => clearInterval(timer)
        setCount(count + 1)
    }, [count])

    return <div>test 04-- {count}</div>
}

export default Page
