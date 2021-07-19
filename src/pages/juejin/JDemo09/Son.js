/** @format */

import React from 'react'
import propsTypes from 'proptypes'

class Son extends React.Component {
  componentDidMount() {
    console.log(this.context.theme)
  }

  render() {
    return <p>i am son</p>
  }
}

Son.contextTypes = {
  theme: propsTypes.object,
}

export default Son
