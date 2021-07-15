/** @format */

import {useState, useRef, forwardRef, useImperativeHandle} from 'react'

const Son = (props, ref) => {
    const inputRef = useRef(null)
    const [inputVal, setInputVal] = useState('')

    useImperativeHandle(
        ref,
        () => {
            const handleRefs = {
                onFocus() {
                    inputRef.current.focus()
                },

                onChangeValue(value) {
                    setInputVal(value)
                },
            }
            return handleRefs
        },
        [],
    )

    return <input ref={inputRef} value={inputVal} type="text" />
}

const ForwardRefSon = forwardRef(Son)

const Page = () => {
    const ref = useRef(null)
    const handleClick = () => {
        const {onFocus, onChangeValue} = ref.current
        onFocus()
        onChangeValue('2222')
    }

    return (
        <div>
            <ForwardRefSon ref={ref} />
            <button onClick={handleClick}>handleClick</button>
        </div>
    )
}

export default Page
