import { Link, useLocation } from 'react-router-dom'
import './Layout.css'

export default function Layout({ children }) {
  const location = useLocation()

  const nav = [
    { path: '/', label: 'Início' },
    { path: '/lista', label: 'Lista' },
    { path: '/novo', label: 'Novo' },
  ]

  return (
    <div className="layout">
      <header className="header">
        <Link to="/" className="logo">DevOps SATC</Link>
        <nav className="nav">
          {nav.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={location.pathname === path ? 'nav-link active' : 'nav-link'}
            >
              {label}
            </Link>
          ))}
        </nav>
      </header>
      <main className="main">
        {children}
      </main>
      <footer className="footer">
        Sistema web simples — DevOps
      </footer>
    </div>
  )
}
