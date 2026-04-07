import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Formulario.css'

export default function Formulario() {
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!nome.trim()) return
    alert(`Item "${nome}" enviado com sucesso!`)
    setNome('')
    setDescricao('')
    navigate('/lista')
  }

  return (
    <div className="formulario">
      <h1>Novo item</h1>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Nome
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Ex: Nova tarefa"
            required
          />
        </label>
        <label>
          Descrição
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Descrição opcional..."
            rows={3}
          />
        </label>
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">Salvar</button>
          <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  )
}
