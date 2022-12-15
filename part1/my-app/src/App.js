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
  // up to 1.2
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14
  // up to 1.3
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return (
    <div>
      <Header course={course} />
      <Content part1={part1.name} exercises1={part1.exercises} part2={part2.name} exercises2={part2.exercises} part3={part3.name} exercises3={part3.exercises} />
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
    </div>
  )
}

export default App