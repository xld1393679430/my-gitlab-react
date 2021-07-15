/** @format */

import React, {useImperativeHandle, useRef, useEffect, forwardRef} from 'react'

const Hoc = Component => {
    class Wrap extends React.Component {
        render() {
            const {forwardedRef, ...otherProps} = this.props
            return <Component ref={forwardedRef} {...otherProps} />
        }
    }
    return forwardRef((props, ref) => <Wrap forwardedRef={ref} {...props} />)
}

// 因为函数没有实例（函数不可以new），所以不可以通过ref直接获取实例，需要 forwardRef + useImperativeHandle
function Son2(props, ref) {
    console.log(props, ref, 'Son2')

    const say = () => alert('i am son2')

    useImperativeHandle(
        ref,
        () => {
            return {
                say,
            }
        },
        [],
    )

    return <div>Son</div>
}

// 类组件可以通过ref直接拿到类的实例
class Son1 extends React.Component {
    say = () => {
        alert('i am son1')
    }
    render() {
        return <div>hello,world</div>
    }
}

const HocSon1 = Hoc(Son1)
const HocSon2 = forwardRef(Son2)

const Page = () => {
    const ref1 = useRef()
    const ref2 = useRef()
    useEffect(() => {
        console.log(ref1, ref2, 'ref')
    }, [])

    return (
        <>
            <p>
                <HocSon1 ref={ref1} name="son1" />
                <button onClick={ref1.current.say}>按钮</button>
            </p>
            <p>
                <HocSon2 ref={ref2} name="son2" />
                <button onClick={ref2.current.say}>按钮</button>
            </p>
        </>
    )
}

export default Page
