export default function Account() {
  return (
    <div className="page">
      <div className="page-title">
        <h1>Аккаунт</h1>
        <p>Управляйте своим профилем и подпиской</p>
      </div>

      <div className="account-header">
        <div className="avatar">А</div>
        <h2>Анна Иванова</h2>
        <p>anna.ivanova@example.com</p>
      </div>

      <div className="account-list">
        <div className="account-row">
          <div className="row-icon">♡</div>
          <div className="row-text">
            <div className="title">Премиум для добра</div>
            <div className="sub">Оформите подписку и помогите школам</div>
          </div>
          <span className="chevron">›</span>
        </div>
        <div className="account-row">
          <div className="row-icon">🔒</div>
          <div className="row-text">
            <div className="title">Безопасность</div>
            <div className="sub">Пароль и двухфакторная аутентификация</div>
          </div>
          <span className="chevron">›</span>
        </div>
        <div className="account-row">
          <div className="row-icon">💳</div>
          <div className="row-text">
            <div className="title">Платежи и подписка</div>
            <div className="sub">История платежей и способы оплаты</div>
          </div>
          <span className="chevron">›</span>
        </div>
        <div className="account-row">
          <div className="row-icon">🔔</div>
          <div className="row-text">
            <div className="title">Уведомления</div>
            <div className="sub">Настройка push-уведомлений</div>
          </div>
          <span className="chevron">›</span>
        </div>
        <div className="account-row">
          <div className="row-icon">❓</div>
          <div className="row-text">
            <div className="title">Помощь и поддержка</div>
            <div className="sub">Связаться с нами</div>
          </div>
          <span className="chevron">›</span>
        </div>
      </div>

      <button className="btn-signout">Выйти из аккаунта</button>
    </div>
  )
}
