/** @format */

import {useEffect, useState} from 'react'
import {unstable_batchedUpdates} from 'react-dom'

const Page = () => {
  const [name, setName] = useState('name1')
  const [age, setAge] = useState(10)
  useEffect(() => {
    console.log(name, age, 'useEffect')
  }, [])

  const handleClick = () => {
    setTimeout(() => {
      // 异步useState如果不放在unstable_batchedUpdates中每次改变state都会执行render
      // 即有几个setState, 就会执行几次render, 使用unstable_batchedUpdates可以合并即有几个setState， 减少render次数
      unstable_batchedUpdates(() => {
        setName('name2')
        setAge(20)
      })
    }, 1000)
  }
  console.log(name, age, 'render')
  return (
    <div>
      <p>测试异步setState</p>
      <p>name: {name}</p>
      <p>age: {age}</p>
      <button onClick={handleClick}>click me</button>
    </div>
  )
}

export default Page
