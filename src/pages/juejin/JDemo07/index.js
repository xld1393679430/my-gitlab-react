/** @format */

import {useEffect, useRef} from 'react'

const toLearn = [
    {
        type: 1,
        msg: 'aaa',
    },
    {
        type: 2,
        msg: 'bbb',
    },
]

const Page = () => {
    const typeInfo = useRef(toLearn[0])
    const handleClick = item => {
        typeInfo.current = item
        console.log(typeInfo, 'typeInfo-2')
    }

    useEffect(() => {
        console.log(typeInfo, 'typeInfo-1')
    }, [])

    return (
        <div>
            {toLearn.map(item => {
                return (
                    <p key={item.type} onClick={() => handleClick(item)}>
                        {item.msg}
                    </p>
                )
            })}
        </div>
    )
}

export default Page
