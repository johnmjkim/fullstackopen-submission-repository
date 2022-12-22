import { useState } from 'react'

const StatisticLine = (props) => (
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>
)

const StatisticLinePercent = (props) => (
  <tr>
    <td>{props.text}</td>
    <td>{props.value*100}%</td>
  </tr>
)

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = (props) => {
  if(props.clicked == false){
    return(
      <div>
        No feedback given
      </div>
    )
  }
  return(
    <tr>
      <StatisticLine text="good" value={props.good}></StatisticLine>
      <StatisticLine text="neutral" value={props.neutral}></StatisticLine>
      <StatisticLine text="bad" value={props.bad}></StatisticLine>
      <StatisticLine text="all" value={props.sum}></StatisticLine>
      <StatisticLine text="average" value={(props.good - props.bad)/props.sum}></StatisticLine>
      <StatisticLinePercent text="positive" value={props.good/props.sum}></StatisticLinePercent>
    </tr>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [clicked, setClicked] = useState(false)
  let sum = good + neutral + bad

  return (
    <div>
      <h1>
        give feedback
      </h1>
      <Button handleClick={() => {
          setGood(good + 1);
          setClicked(true);
        }
      } text='good' />
      <Button handleClick={() => {
        setNeutral(neutral + 1);
        setClicked(true);
        }
      } text='neutral' />
      <Button handleClick={() => {
        setBad(bad + 1);
        setClicked(true);
        }
      } text='bad' />
      <h1>
        statistics
      </h1>
      <Statistics clicked={clicked} good={good} neutral={neutral} bad={bad} sum={sum}></Statistics>
    </div>
  )
}

export default App