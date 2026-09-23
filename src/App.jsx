import Header from './Header'
import Content from './Content'
import Total from './Total'

const App = () => {
  const course = 'CSIT340'

  const part1 = {
  name: 'Information Management 2',
  exercises: 3
  }

  const part2 = {
    name: 'Application Development',
    exercises: 3
  }

  const part3 = {
    name: 'Industry Elective',
    exercises: 3
  }

  return (
    <div>
      <Header course={course} />

      <Content
        part1={part1}
        part2={part2}
        part3={part3}
      />
      <Total
      part1={part1}
      part2={part2}
      part3={part3}
      />
    </div>
  )
}

export default App