/** @format */

import {useState, useContext, createContext} from 'react'

const theme = {
  //主题颜色
  dark: {color: '#1890ff', border: '1px solid blue', type: 'dark'},
  light: {color: '#fc4838', border: '1px solid pink', type: 'light'},
}

const Context = createContext(null)

const Form = () => {
  const ctx = useContext(Context)
  const [username, setUserName] = useState('')
  const [age, setAge] = useState('')
  const handleChangeUserName = value => {
    setUserName(value)
  }

  const handleChangeAge = value => {
    setAge(value)
  }

  const handleSubmit = () => {
    console.log(username, age)
  }

  const handleReset = () => {
    setUserName('')
    setAge('')
  }

  console.log(ctx)

  return (
    <div style={ctx}>
      <form>
        <div>
          <label htmlFor="usename">name:</label>
          <input type="text" id="usename" value={username} onChange={e => handleChangeUserName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="age">age:</label>
          <input type="text" id="age" value={age} onChange={e => setAge(e.target.value)} />
        </div>
        <button onClick={handleSubmit}>提交</button>
        <button onClick={handleReset}>重置</button>
      </form>
    </div>
  )
}

const Page = () => {
  const [currentTheme, setCurrentTheme] = useState(theme.dark)
  const handleChangeTheme = type => {
    setCurrentTheme(theme[type])
  }
  return (
    <div className="container" style={currentTheme}>
      <p>
        <span>选择主题</span>
        <span>
          <label htmlFor="dark">dark:</label>
          <input
            type="radio"
            id="dark"
            onChange={() => handleChangeTheme('dark')}
            checked={currentTheme.type === 'dark'}
          />
        </span>
        <span>
          <label htmlFor="light">light:</label>
          <input
            type="radio"
            id="light"
            onChange={() => handleChangeTheme('light')}
            checked={currentTheme.type === 'light'}
          />
        </span>
      </p>

      <Context.Provider value={{...currentTheme}}>
        <Form />
      </Context.Provider>
    </div>
  )
}

export default Page
