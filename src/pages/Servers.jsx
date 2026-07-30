import { useState } from 'react'

const SERVERS = [
  { flag: '🇺🇸', country: 'США', city: 'Нью-Йорк', ping: 20, load: 42 },
  { flag: '🇬🇧', country: 'Великобритания', city: 'Лондон', ping: 23, load: 45 },
  { flag: '🇨🇦', country: 'Канада', city: 'Торонто', ping: 28, load: 37 },
  { flag: '🇳🇱', country: 'Нидерланды', city: 'Амстердам', ping: 19, load: 41 },
  { flag: '🇫🇷', country: 'Франция', city: 'Париж', ping: 24, load: 48 },
  { flag: '🇯🇵', country: 'Япония', city: 'Токио', ping: 72, load: 33 },
  { flag: '🇦🇺', country: 'Австралия', city: 'Сидней', ping: 65, load: 40 },
]

export default function Servers() {
  const [tab, setTab] = useState('all')
  const [favorites, setFavorites] = useState({})

  const toggleFavorite = (city) => {
    setFavorites(prev => ({ ...prev, [city]: !prev[city] }))
  }

  return (
    <div className="page">
      <div className="page-title">
        <h1>Серверы</h1>
        <p>Выберите местоположение сервера для подключения</p>
      </div>

      <div className="search-box">🔍 Поиск страны или города</div>

      <div className="filter-row">
        <button>⏚ Фильтр</button>
        <button>Сортировка: Рекомендуемые ▾</button>
      </div>

      <div className="tabs-row">
        <div className={`tab ${tab === 'all' ? 'active' : ''}`} onClick={() => setTab('all')}>
          🛡️ Все серверы
        </div>
        <div className={`tab ${tab === 'fav' ? 'active' : ''}`} onClick={() => setTab('fav')}>
          ☆ Избранное
        </div>
        <div className={`tab ${tab === 'recent' ? 'active' : ''}`} onClick={() => setTab('recent')}>
          🕐 Недавние
        </div>
      </div>

      <div className="section-label">Рекомендуем для вас</div>
      <div className="server-card recommended">
        <div className="flag">🇩🇪</div>
        <div className="name">
          <h4>Германия <span className="optimal-tag">Оптимальный</span></h4>
          <p>Берлин</p>
        </div>
        <div className="metrics">
          <div>Пинг<span>18 мс</span></div>
          <div>Загрузка<span>98%</span></div>
        </div>
        <button className="star-btn" onClick={() => toggleFavorite('Берлин')}>
          {favorites['Берлин'] ? '★' : '☆'}
        </button>
        <button className="connect-btn">Подключить</button>
      </div>

      <div className="section-label">Все локации</div>
      {SERVERS.map(s => (
        <div className="server-card" key={s.city}>
          <div className="flag">{s.flag}</div>
          <div className="name">
            <h4>{s.country}</h4>
            <p>{s.city}</p>
          </div>
          <div className="metrics">
            <div>Пинг<span>{s.ping} мс</span></div>
            <div>Загрузка<span>{s.load}%</span></div>
          </div>
          <button className="star-btn" onClick={() => toggleFavorite(s.city)}>
            {favorites[s.city] ? '★' : '☆'}
          </button>
          <span className="chevron">›</span>
        </div>
      ))}

      <div className="thank-you-banner" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
        <div className="left">
          <span>💚</span>
          <div>
            <h4>Спасибо! Ты помогаешь школам и детям</h4>
            <p>Каждое подключение — больше возможностей для будущего</p>
          </div>
        </div>
        <button className="btn-premium" style={{ marginTop: 10, width: '100%' }}>♡ Премиум для добра</button>
      </div>
    </div>
  )
}
