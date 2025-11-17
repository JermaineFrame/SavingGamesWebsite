import './StatsInfographic.css'

function StatsInfographic({ consoles }) {
  // Calculate statistics
  const totalConsoles = consoles.length
  const manufacturers = [...new Set(consoles.map(c => c.manufacturer))]
  const totalManufacturers = manufacturers.length

  // Parse units sold (convert strings like "30 million" to numbers)
  const parseUnitsSold = (units) => {
    const match = units.match(/[\d.]+/)
    return match ? parseFloat(match[0]) : 0
  }

  const totalUnitsSold = consoles.reduce((sum, console) => {
    return sum + parseUnitsSold(console.unitsSold)
  }, 0)

  // Best selling console
  const bestSelling = consoles.reduce((best, console) => {
    const currentSales = parseUnitsSold(console.unitsSold)
    const bestSales = parseUnitsSold(best.unitsSold)
    return currentSales > bestSales ? console : best
  }, consoles[0])

  // Consoles by generation
  const generations = consoles.reduce((acc, console) => {
    acc[console.generation] = (acc[console.generation] || 0) + 1
    return acc
  }, {})

  const maxGeneration = Math.max(...Object.keys(generations).map(Number))

  return (
    <div className="stats-infographic">
      <h2 className="stats-title">Gaming By The Numbers</h2>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">🎮</div>
          <div className="stat-value">{totalConsoles}</div>
          <div className="stat-label">Consoles Featured</div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🏭</div>
          <div className="stat-value">{totalManufacturers}</div>
          <div className="stat-label">Manufacturers</div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📊</div>
          <div className="stat-value">{totalUnitsSold.toFixed(0)}M+</div>
          <div className="stat-label">Total Units Sold</div>
        </div>

        <div className="stat-card highlight">
          <div className="stat-icon">👑</div>
          <div className="stat-value">{bestSelling.name}</div>
          <div className="stat-label">Best Selling Console</div>
          <div className="stat-detail">{bestSelling.unitsSold}</div>
        </div>
      </div>

      <div className="generation-chart">
        <h3 className="chart-title">Consoles by Generation</h3>
        <div className="chart-bars">
          {Object.entries(generations)
            .sort(([a], [b]) => Number(a) - Number(b))
            .map(([gen, count]) => (
              <div key={gen} className="chart-bar-container">
                <div className="chart-label">Gen {gen}</div>
                <div className="chart-bar-wrapper">
                  <div
                    className="chart-bar"
                    style={{
                      width: `${(count / Math.max(...Object.values(generations))) * 100}%`
                    }}
                  >
                    <span className="bar-value">{count}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="manufacturer-breakdown">
        <h3 className="chart-title">Consoles by Manufacturer</h3>
        <div className="manufacturer-grid">
          {manufacturers.map(manufacturer => {
            const manufacturerConsoles = consoles.filter(c => c.manufacturer === manufacturer)
            const totalSales = manufacturerConsoles.reduce(
              (sum, c) => sum + parseUnitsSold(c.unitsSold),
              0
            )

            return (
              <div key={manufacturer} className="manufacturer-card">
                <div className="manufacturer-name">{manufacturer}</div>
                <div className="manufacturer-stats">
                  <div className="manufacturer-stat">
                    <span className="stat-number">{manufacturerConsoles.length}</span>
                    <span className="stat-text">consoles</span>
                  </div>
                  <div className="manufacturer-stat">
                    <span className="stat-number">{totalSales.toFixed(0)}M</span>
                    <span className="stat-text">units sold</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default StatsInfographic
