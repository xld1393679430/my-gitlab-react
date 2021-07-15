/** @format */

const Input = props => {
  const {value, onChange} = props
  return (
    <input
      value={value}
      onChange={e => {
        onChange && onChange(e.target.value)
      }}
    />
  )
}

Input.displayName = 'Input'

export default Input
