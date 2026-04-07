import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Lista from './pages/Lista'
import Formulario from './pages/Formulario'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lista" element={<Lista />} />
        <Route path="/novo" element={<Formulario />} />
      </Routes>
    </Layout>
  )
}
