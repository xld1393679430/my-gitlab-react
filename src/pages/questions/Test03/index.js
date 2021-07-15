/** @format */

import {useState} from 'react'

//  React Hook 必须按顺序、不能在条件语句中调用的枷锁！
const Page = () => {
  let count1, count2, setCount1, setCount2
  const [random, setRandom] = useState(0)
  if (random > 0.5) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    ;[count1, setCount1] = useState(1, 'count-1')
  } else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    ;[count2, setCount2] = useState(2, 'count-2')
  }
  return (
    <div>
      <p>
        <button onClick={() => setCount1(count1 + 1)}>button1 --- {count1}</button>
      </p>
      <p>
        <button onClick={() => setCount2(count2 + 2)}>button2 --- {count2}</button>
      </p>
      <button onClick={() => setRandom(Math.random())}>Math.random -- {random}</button>
    </div>
  )
}

export default Page
