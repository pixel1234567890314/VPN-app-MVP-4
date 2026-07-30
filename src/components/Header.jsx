export default function Header() {
  return (
    <div className="app-header">
      <div className="brand">
        <span role="img" aria-label="shield">🛡️</span>
        <span>VPN for Good</span>
        <span className="version">1.0.0</span>
      </div>
      <div className="actions">
        <div className="icon-btn">⇅</div>
        <div className="icon-btn">✉️</div>
      </div>
    </div>
  )
}
