import { useState } from 'react'
import { unstable_batchedUpdates } from 'react-dom/cjs/react-dom.development'


const Page = () => {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    const [count3, setCount3] = useState(0)
    const [count4, setCount4] = useState(0)

    const handleAdd = () => {
        console.log(count1, 'a')
        setCount1(count1 => {
            console.log(count1, 'b')
            return count1 + 1
        })
        console.log(count1, 'c')
        setCount1(count1 => {
            console.log(count1, 'd')
            return count1 + 2
        })
        console.log(count1, 'e')
    }

    const handleBatchAdd = () => {
        unstable_batchedUpdates(() => {
            console.log(count2, 'a')
            setCount2(count2 => {
                console.log(count2, 'b')
                return count2 + 1
            })
            console.log(count2, 'c')
            setCount2(count2 => {
                console.log(count2, 'd')
                return count2 + 2
            })
            console.log(count2, 'e')
        })
    }

    const handleSyncAdd = () => {
        setTimeout(() => {
            console.log(count3, 'a')
            setCount3(count3 => {
                console.log(count3, 'b')
                return count3 + 1
            })
            console.log(count3, 'c')
            setCount3(count3 => {
                console.log(count3, 'd')
                return count3 + 2
            })
            console.log(count3, 'e')
        }, 100)
    }

    const handleBatchSyncAdd = () => {
        setTimeout(() => {
            unstable_batchedUpdates(() => {
                console.log(count4, 'a')
                setCount4(count4 => {
                    console.log(count4, 'b')
                    return count4 + 1
                })
                console.log(count4, 'c')
                setCount4(count4 => {
                    console.log(count4, 'd')
                    return count4 + 2
                })
                console.log(count4, 'e')
            })
        }, 100)
    }

    return (
        <div>
            <p>
                <span>handleAdd--count1: {count1}</span>
                <button onClick={handleAdd}>handleAdd</button>
            </p>

            <p>
                <span>handleBatchAdd--count2: {count2}</span>
                <button onClick={handleBatchAdd}>handleBatchAdd</button>
            </p>

            <p>
                <span>handleSyncAdd--count3: {count3}</span>
                <button onClick={handleSyncAdd}>handleSyncAdd</button>
            </p>

            <p>
                <span>handleSyncAdd--count4: {count4}</span>
                <button onClick={handleBatchSyncAdd}>handleSyncAdd</button>
            </p>
        </div>
    )
}

export default Page