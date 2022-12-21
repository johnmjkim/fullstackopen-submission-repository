import { useState } from 'react'

const Display = (props) => (
  <div>
    {props.text} {props.value}
  </div>
)

const DisplayPercent = (props) => (
  <div>
    {props.text} {props.value*100}%
  </div>
)

const Statistics = (props) => (
  <div>
    <Display value={props.good} text={"good"}></Display>
    <Display value={props.neutral} text={"neutral"}></Display>
    <Display value={props.bad} text={"bad"}></Display>
    <Display value={props.sum} text={"all"}></Display>
    <Display value={(props.good - props.bad)/props.sum} text={"average"}></Display>
    <DisplayPercent value={props.good/props.sum} text={"positive"}></DisplayPercent>
  </div>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let sum = good + neutral + bad

  return (
    <div>
      <h1>
        give feedback
      </h1>
      <button onClick={() => setGood(good + 1)}>
        good
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>
        neutral
      </button>
      <button onClick={() => setBad(bad + 1)}>
        bad
      </button>
      <h1>
        statistics
      </h1>
      <Statistics good={good} neutral={neutral} bad={bad} sum={sum}></Statistics>
    </div>
  )
}

export default App