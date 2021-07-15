/** @format */

import React, {useState, useMemo, memo} from 'react'

const Child = memo(({data, child}) => {
  return (
    <div>
      <p>name:{data.name}</p>
    </div>
  )
})

const Page = () => {
  const [count, setCount] = useState(0)
  const [data, setData] = useState({name: 'a'})

  const _data1 = useMemo(() => {
    return {name: 'a1'}
  }, [])

  const _data2 = useMemo(() => {
    return data
  }, [data])

  const _data3 = {
    name: 'a3',
  }

  const handleClick = e => {
    setCount(count + 1)
  }

  return (
    <div>
      <div>
        <span>count: {count}</span>
        <button onClick={handleClick}>add</button>
      </div>
      <div>
        <Child data={data}></Child>

        <Child data={_data1} child={'a'}></Child>

        <Child data={_data2}></Child>

        <Child data={_data3}></Child>
      </div>
    </div>
  )
}

export default Page
