import React, { useState } from "react"

const Form = (props) => {
    const { children } = props
    const [formData, setFormData] = useState({})

    const submitForm = (cb) => {
        cb({ ...formData })
    }

    const resetForm = () => {
        Object.keys(formData).forEach(key => {
            formData[key] = ""
        })
        setFormData(formData)
    }

    const setValue = (key, value) => {
        setFormData(prevData => {
            return {
                ...prevData,
                [key]: value
            }
        })
    }

    const renderChildren = []

    React.Children.forEach(children, (child) => {
        if (child.type.displayName === 'FormItem') {
            const { name } = child.props
            const Children = React.cloneElement(child, {
                key: name,
                handleChange: setValue,
                value: formData[name] || ''
            }, child.props.children)

            renderChildren.push(Children)
        }
    })

    return renderChildren

}

Form.displayName = 'Form'

export default Form