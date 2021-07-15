import { useState, useEffect } from 'react'
import { unstable_batchedUpdates } from 'react-dom'

const Page = () => {
    let [name, setName] = useState('张三')
    let [age, setAge] = useState(10)

    const handleClick = () => {
        setTimeout(() => {
            unstable_batchedUpdates(() => {
                setName('李四')
                setAge(11)
            })
        }, 500)
    }

    useEffect(() => {
        console.log(name, age, 'useEffect')
    }, [name, age])

    return (
        <div>
            <p>批量更新</p>
            <p>name: {name}</p>
            <p>age: {age}</p>
            <button onClick={handleClick}>按钮</button>
        </div>
    )
}

export default Page