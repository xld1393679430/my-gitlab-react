import React from 'react'

const FormItem = (props) => {
    console.log(props, 'props---00')
    const { children, handleChange, name, value, label } = props

    const onChange = (value) => {
        handleChange && handleChange(name, value)
    }

    return (
        <div>
            <span>{label}:</span>
            {
                React.isValidElement(children) && children.type.displayName === 'Input' ? (
                    React.cloneElement(children, { onChange, value })
                ) : null
            }
        </div>
    )
}

FormItem.displayName = 'FormItem'

export default FormItem