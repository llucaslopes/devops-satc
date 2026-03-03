import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <h1>Bem-vindo ao DevOps SATC</h1>
      <p className="lead">
        Sistema web simples para integrar Desenvolvimento e Operações,
        com foco em qualidade e confiabilidade.
      </p>
      <div className="actions">
        <Link to="/lista" className="btn btn-primary">Ver lista</Link>
        <Link to="/novo" className="btn btn-secondary">Adicionar item</Link>
      </div>
    </div>
  )
}
