/** @format */

import React, {createContext, useContext, useEffect} from 'react'

const initialContext = {
  name: 'aaa',
}
const context = createContext()

const Son1 = () => {
  const ctx = useContext(context)

  useEffect(() => {
    console.log(ctx, 'Son1-Context')
  }, [])

  return <div>Son1</div>
}

const Son2 = () => {
  const Consumer = context.Consumer

  return (
    <Consumer>
      {value => {
        console.log(value, 'Son2-Context')
        return <div>Son2</div>
      }}
    </Consumer>
  )
}

const Page = () => {
  const Provider = context.Provider

  return (
    <Provider value={initialContext}>
      <Son1 />
      <Son2 />
    </Provider>
  )
}

export default Page
