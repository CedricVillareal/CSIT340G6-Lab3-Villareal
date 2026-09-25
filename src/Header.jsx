const Header = ({ course }) => {
  return (
    <header className="header">
      <div className="header-icon">
        🎓
      </div>

      <div className="header-content">
        <h1>{course}</h1>
        <p>Course Information</p>
      </div>
    </header>
  )
}

export default Header