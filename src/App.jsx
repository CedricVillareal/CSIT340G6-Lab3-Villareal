import Header from './Header'
import Content from './Content'
import Total from './Total'
import Footer from './Footer'
import './App.css'

const App = () => {
  const course = {
    name: 'CIT-U',
    parts: [
      {
        name: 'Information Management II',
        exercises: 3
      },
      {
        name: 'Application Development',
        exercises: 3
      },
      {
        name: 'Industry Elective',
        exercises: 3
      }
    ]
  }

  return (
    <div className="app">
      <main className="course-card">
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </main>

      <Footer
        name="Cedric Villareal"
        courseCode="CSIT340"
        section="G6"
      />
    </div>
  )
}

export default App