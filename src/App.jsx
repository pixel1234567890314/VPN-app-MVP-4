import { useState } from 'react'
import Header from './components/Header.jsx'
import BottomNav from './components/BottomNav.jsx'
import Home from './pages/Home.jsx'
import Servers from './pages/Servers.jsx'
import Account from './pages/Account.jsx'

export default function App() {
  const [tab, setTab] = useState('home')

  return (
    <div className="app-shell">
      <Header />
      {tab === 'home' && <Home />}
      {tab === 'servers' && <Servers />}
      {tab === 'account' && <Account />}
      <BottomNav active={tab} onChange={setTab} />
    </div>
  )
}
