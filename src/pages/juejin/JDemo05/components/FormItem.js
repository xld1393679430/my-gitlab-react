/** @format */

import React from 'react'
import {useCallback} from 'react'

const FormItem = props => {
  const {children, handleChange, name, value, label} = props

  const onChange = useCallback(
    value => {
      handleChange && handleChange(name, value)
    },
    [handleChange, name],
  )

  return (
    <div>
      <span>{label}:</span>
      {React.isValidElement(children) && children.type.displayName === 'Input'
        ? React.cloneElement(children, {onChange, value})
        : null}
    </div>
  )
}

FormItem.displayName = 'FormItem'

export default FormItem
