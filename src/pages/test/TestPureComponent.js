/** @format */

import React from 'react'
class Page extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        name: 'alien',
        age: 28,
      },
    }
  }
  handleClick = () => {
    const {user} = this.state
    user.age++
    this.setState({
      user: user,
    })
  }
  render() {
    const {user} = this.state
    return (
      <div className="box">
        <div className="show">
          <div> 你的姓名是: {user.name} </div>
          <div> 年龄： {user.age}</div>
          <button onClick={this.handleClick}>age++</button>
        </div>
      </div>
    )
  }
}

export default Page
