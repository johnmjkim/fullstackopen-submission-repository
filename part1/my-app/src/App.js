const Header = (header_props) => {
  return (
    <div>
      <h1>{header_props.course}</h1>
    </div>
  )
}

const Part = (part_props) => {
  return (
    <div>
      <p>
        {part_props.part} {part_props.exercises}
      </p>
    </div>
  )
}

const Content = (content_props) => {
  return (
    <div>
      <Part part={content_props.part1} exercises={content_props.exercises1} />
      <Part part={content_props.part2} exercises={content_props.exercises2} />
      <Part part={content_props.part3} exercises={content_props.exercises3} />
    </div>
  )
}

const Total = (total_props) => {
  return (
    <div>
      <p>
        Number of exercises {total_props.exercises1 + total_props.exercises2 + total_props.exercises3}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

export default App