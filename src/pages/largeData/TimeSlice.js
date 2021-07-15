import React, { useEffect, useState } from 'react'

// 处理大量数据的方法1: 时间分片
const Page = () => {
    let [list, setList] = useState(['a'])

    const getList1 = (data, time) => {
        const _data = data.slice(time, 400 * (time + 1))
        setList(_data)
        if (time * 400 <= data.length) {
            // setTimeout(() => {
            //     getList1(data, time + 1)
            // }, 0)

            // requestAnimationFrame效果比setTime更好
            window.requestAnimationFrame(() => getList1(data, time + 1))
        }

    }

    const getList2 = (data) => {
        setList(data)
    }

    const handleClick = () => {
        const data = new Array(40000).fill(0)
        // getList1(data, 0)
        // getList2(data)
    }

    return (
        <div>
            <button onClick={handleClick}>handleClick</button>
            <ul>
                {
                    list.map((item, index) => <li key={index}>{index + 1}</li>)
                }
            </ul>
        </div>
    )
}

export default Page