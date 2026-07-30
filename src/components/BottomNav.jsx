const TABS = [
  { key: 'home', label: 'Главная', icon: '🏠' },
  { key: 'servers', label: 'Серверы', icon: '🖥️' },
  { key: 'account', label: 'Аккаунт', icon: '👤' },
]

export default function BottomNav({ active, onChange }) {
  return (
    <nav className="bottom-nav">
      {TABS.map(tab => (
        <button
          key={tab.key}
          className={`nav-item ${active === tab.key ? 'active' : ''}`}
          onClick={() => onChange(tab.key)}
        >
          <span style={{ fontSize: 18 }}>{tab.icon}</span>
          <span>{tab.label}</span>
        </button>
      ))}
    </nav>
  )
}
