/** @format */

import React, {useState, forceUpdate} from 'react'

const Page = () => {
  const [num, setNum] = useState(0)
  let ref = null
  const handleClick = () => {
    setNum(num + 1)
    // forceUpdate()
  }

  const handleChange = () => {}

  return (
    <div>
      <input
        type="text"
        value={num}
        onChange={handleChange}
        ref={el => {
          ref = el
          console.log('el: ', el, ref)
        }}
      />
      <button onClick={handleClick}>add--{num}</button>
      {/* <p>ref: {ref?.value}</p> */}
    </div>
  )
}

export default Page
