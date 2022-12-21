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
    <div>
      <Display value={props.good} text={"good"}></Display>
      <Display value={props.neutral} text={"neutral"}></Display>
      <Display value={props.bad} text={"bad"}></Display>
      <Display value={props.sum} text={"all"}></Display>
      <Display value={(props.good - props.bad)/props.sum} text={"average"}></Display>
      <DisplayPercent value={props.good/props.sum} text={"positive"}></DisplayPercent>
    </div>
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