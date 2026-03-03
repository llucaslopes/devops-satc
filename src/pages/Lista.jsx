import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Lista.css'

const itensIniciais = [
  { id: 1, nome: 'Configuração CI/CD', status: 'Concluído' },
  { id: 2, nome: 'Monitoramento SRE', status: 'Em andamento' },
  { id: 3, nome: 'Documentação APIs', status: 'Pendente' },
]

export default function Lista() {
  const [itens] = useState(itensIniciais)

  return (
    <div className="lista">
      <div className="lista-header">
        <h1>Lista de itens</h1>
        <Link to="/novo" className="btn btn-primary">Novo item</Link>
      </div>
      <ul className="lista-itens">
        {itens.map((item) => (
          <li key={item.id} className="lista-item">
            <span className="item-nome">{item.nome}</span>
            <span className={`item-status status-${item.status.toLowerCase().replace(' ', '-')}`}>
              {item.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
