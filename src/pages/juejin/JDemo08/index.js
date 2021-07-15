/** @format */

import React, {useState} from 'react'

const Page = () => {
    let ref = null
    const [num, setNum] = useState(0)
    console.log(11)

    const handleClick = () => {
        setNum(num + 1)
    }

    return (
        <div
            ref={el => {
                ref = el
                console.log('el: ', el)
            }}>
            <button onClick={handleClick}>add--{num}</button>
        </div>
    )
}

export default Page
