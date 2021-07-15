/** @format */

import React, {isValidElement, cloneElement} from 'react'

const Demo = props => {
  console.log(props, 'Demo')
  return (
    <div>
      <p>Demo</p>
      {props.children}
    </div>
  )
}

const Container = props => {
  const ContainerProps = {
    name: 'aline',
    msg: 'let us learn react',
  }

  return props.children.map(item => {
    if (isValidElement(item)) return cloneElement(item, {...ContainerProps}, item.props.children)
    else if (typeof item === 'function') return item(ContainerProps)
    else return null
  })
}

const Page = () => {
  return (
    <div>
      <Container>
        <Demo name="a" />
        {constainerProps => <Demo name="b" {...constainerProps} />}
      </Container>
      <Demo>
        {/* <h4>title</h4> */}
        <button>按钮</button>
      </Demo>
    </div>
  )
}

export default Page
