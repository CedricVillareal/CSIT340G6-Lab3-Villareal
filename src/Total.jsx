const Total = ({ parts }) => {
  return (
    <section className="total">
      <div className="total-icon">
        ✓
      </div>

      <div className="total-info">
        <p>Total Units</p>
        <span>Across all subjects</span>
      </div>

      <strong>
        {parts[0].exercises +
          parts[1].exercises +
          parts[2].exercises}
      </strong>
    </section>
  )
}

export default Total