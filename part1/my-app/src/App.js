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
      <Part part={content_props.parts[0].name} exercises={content_props.parts[0].exercises} />
      <Part part={content_props.parts[1].name} exercises={content_props.parts[1].exercises} />
      <Part part={content_props.parts[2].name} exercises={content_props.parts[2].exercises} />
    </div>
  )
}

const Total = (total_props) => {
  return (
    <div>
      <p>
        Number of exercises {total_props.parts[0].exercises + total_props.parts[1].exercises + total_props.parts[2].exercises}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App