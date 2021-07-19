/** @format */

import React, {createContext, useContext, useEffect, useState, memo, useMemo} from 'react'

const context = createContext()

const GrandSon = () => {
  useEffect(() => {
    console.log('GrandSon--Effect')
  }, [])

  console.log('GrandSon-render')
  return <div>GrandSon</div>
}

const Son = memo(() => {
  const ctx = useContext(context)

  useEffect(() => {
    console.log(ctx, 'Son-Context--useEffect')
  }, [])

  useEffect(() => {
    console.log(ctx, 'Son-Context.num--useEffect')
  }, [ctx.num])

  console.log('Son1-Render')

  return (
    <div>
      <p>Son1--{ctx.num}</p>
      <GrandSon />
    </div>
  )
})

const UIComponent = memo(() => {
  const ctx = useContext(context)
  useEffect(() => {
    console.log('UIComponent--useEffect')
  }, [])

  console.log('UIComponent-Render')
  return <div>i am UIComponent</div>
})

const Page = () => {
  const [ctxValue, setCtxValue] = useState({num: 0})
  const Provider = context.Provider

  const handleChangeCtx = () => {
    setCtxValue({num: ctxValue.num + 1})
  }

  return (
    <Provider value={ctxValue}>
      {useMemo(
        () => (
          <Son />
        ),
        [],
      )}
      <UIComponent />
      <button onClick={handleChangeCtx}>改变context</button>
    </Provider>
  )
}

export default Page
