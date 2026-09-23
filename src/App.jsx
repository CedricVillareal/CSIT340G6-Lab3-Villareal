import Header from './Header'
import Content from './Content'
import Total from './Total'

const App = () => {
  const course = 'CSIT340'

  const part1 = 'Information Management 2'
  const exercises1 = 3

  const part2 = 'Application Development'
  const exercises2 = 3

  const part3 = 'Industry Elective'
  const exercises3 = 3

  return (
    <div>
      <Header course={course} />

      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />

      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  )
}

export default App