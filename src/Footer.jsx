const Footer = ({ name, courseCode, section }) => {
  return (
    <footer className="footer">
      {name} - {courseCode} - {section}
    </footer>
  )
}

export default Footer