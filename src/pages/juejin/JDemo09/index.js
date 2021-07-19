/** @format */

import React from 'react'
import Son from './Son'
import propsTypes from 'proptypes'

class Page extends React.Component {
  getChildContext() {
    const theme = {
      color: '#ccc',
      backgroundColor: 'pink',
    }
    return {
      theme,
    }
  }

  render() {
    return (
      <div>
        <p>i an parent</p>
        {this.props.children}
      </div>
    )
  }
}

Page.childContextTypes = {
  theme: propsTypes.object,
}

function Index() {
  return (
    <Page>
      <Son></Son>
    </Page>
  )
}

export default Index
