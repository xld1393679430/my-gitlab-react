/** @format */

import {useState, useDebugValue} from 'react'

const Page = () => {
  const [isOnline, setIsOnline] = useState(null)

  useDebugValue(isOnline ? 'Online' : 'Offline')

  return isOnline
}

export default Page
