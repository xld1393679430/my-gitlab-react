const ChildrenComponent = () => {
    return (
        <p>i am ChildrenComponent</p>
    )
}

const Dog = (props) => {
    const {
        children,
        msg,
        renderName,
        say,
        Component
    } = props

    const renderFunction = children[0]
    const renderComponent = children[1]

    return (
        <div>
            <p>
                renderFunction:
                {renderFunction()}
            </p>
            <p>
                msg:
                {msg}
            </p>
            {renderName()}
            {renderComponent}
            <Component />
            <button onClick={() => say()} > change content </button>
        </div>
    )
}

const Page = () => {
    const say = () => {
        alert('say funciont')
    }
    return (
        <Dog
            msg={'hello world'}
            say={say}
            Component={ChildrenComponent}
            renderName={() => <span>my name is renderName</span>}
        >
            {() => <span>hello world</span>}
            <ChildrenComponent />
        </Dog>
    )
}

export default Page