import { useState } from 'react'

export default function Home() {
  const [connected, setConnected] = useState(true)

  return (
    <div className="page">
      <div className="charity-row">
        <span className="charity-badge">Режим благотворительности</span>
        <span className="charity-timer">01:16:05</span>
      </div>

      <div className="home-title">
        <div className="check">✅</div>
        <h1>VPN</h1>
        <p>VPN включай — школам помогай 💚</p>
      </div>

      <div
        className={`vpn-toggle ${connected ? '' : 'off'}`}
        onClick={() => setConnected(!connected)}
      >
        <div className="knob">⏻</div>
      </div>

      <div className="school-illustration">🏫</div>

      <div className="impact-card">
        <div className="head">
          <div className="heart">❤️</div>
          <div>
            <h3>Твоё подключение меняет мир</h3>
            <p className="sub">100% твоей подписки идёт на поддержку школ и образования</p>
          </div>
        </div>
        <ul>
          <li>📖 Средства идут на поддержку школ и образовательных ресурсов</li>
          <li>👥 Помогаем детям учиться и расти</li>
          <li>🛡️ Безопасное подключение без рекламы</li>
          <li>🌱 Вместе мы строим лучшее будущее</li>
        </ul>
        <div className="learn-more">Узнать больше о нашем вкладе <span>›</span></div>
      </div>

      <div className="server-select-row">
        <div className="left">🖥️ Выбрать сервер</div>
        <div className="stats">
          <span>↑ 0 Б/с</span>
          <span>↓ 0 Б/с</span>
        </div>
      </div>

      <div className="optimal-server-card">
        <div className="globe">🌍</div>
        <div className="info">
          <h4>Оптимальный сервер</h4>
          <p>Лучший выбор без границ</p>
        </div>
      </div>

      <div className="thank-you-banner">
        <div className="left">
          <span>💚</span>
          <div>
            <h4>Спасибо! Ты помогаешь школам и детям</h4>
            <p>Каждое подключение — больше возможностей для будущего</p>
          </div>
        </div>
        <button className="btn-premium">♡ Премиум для добра</button>
      </div>
    </div>
  )
}
