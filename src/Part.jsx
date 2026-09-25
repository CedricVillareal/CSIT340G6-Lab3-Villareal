const Part = ({ name, exercises }) => {
  return (
    <article className="part">
      <div className="part-icon">
        ✓
      </div>

      <div className="part-info">
        <h2>{name}</h2>
        <p>Course subject</p>
      </div>

      <div className="units">
        <strong>{exercises}</strong>
        <span>UNITS</span>
      </div>
    </article>
  )
}

export default Part