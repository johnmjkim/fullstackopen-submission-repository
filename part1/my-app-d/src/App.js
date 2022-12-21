import { useState } from 'react'

const App = () => {
  const [value, setValue] = useState(10)

  const hello = (who) => {
    const handler = () => {
      console.log('hello', who)
    }
    return handler
  }

  return (
    <div>
      {value}
      <button onClick={hello('world')}>buttonW</button>
      <button onClick={hello('react')}>buttonR</button>
      <button onClick={hello('function')}>buttonF</button>
    </div>
  )
}

export default App