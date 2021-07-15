import React, {
    forwardRef,
    useCallback,
    useState,
    useImperativeHandle
} from "react"

const Form = (props, ref) => {
    const { children } = props

    const [formData, setFormData] = useState({})

    const submitForm = useCallback((cb) => {
        cb({ ...formData })
    }, [formData])

    const resetForm = useCallback(() => {
        Object.keys(formData).forEach(key => {
            formData[key] = ""
        })
        setFormData({...formData})
    }, [formData])

    const setValue = useCallback((key, value) => {
        setFormData(prevData => {
            return {
                ...prevData,
                [key]: value
            }
        })
    }, [])

    useImperativeHandle(ref, () => ({
        submitForm,
        resetForm
    }))

    const Render = useCallback(() => {
        const renderChildren = []
        React.Children.forEach(children, (child) => {
            if (child.type.displayName === 'FormItem') {
                const { name } = child.props
                console.log(formData, child, 2222)
                const Children = React.cloneElement(child, {
                    key: name,
                    handleChange: setValue,
                    value: formData[name] || ''
                }, child.props.children)

                renderChildren.push(Children)
            }
        })

        return renderChildren
    }, [children, formData, setValue])

    return <Render />
}

Form.displayName = 'Form'

export default forwardRef(Form)