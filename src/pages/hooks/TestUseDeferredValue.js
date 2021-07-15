/** @format */

import {useState, useEffect} from 'react'

//
function Page() {
    const [text, setText] = useState('hello')

    function doExpensiveWorkA(x) {
        return x
    }

    function* handler(A, B, C) {
        console.log(A, B, C, 'handler')
        var x = doExpensiveWorkA(A)
        console.log(x, 1)
        yield
        var y = x + doExpensiveWorkA(B)
        console.log(x, y, 2)
        yield
        var z = y + doExpensiveWorkA(C)
        console.log(x, y, z, 3)
        return z
    }

    useEffect(() => {
        const fn = handler(1, 2, 3)
        fn.next()
        fn.next()
        fn.next()
        fn.next()
    }, [])

    return (
        <div>
            <p>{text}</p>
        </div>
    )
}

export default Page
