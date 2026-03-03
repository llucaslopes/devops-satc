# devops-satc

## Sobre o projeto

**DevOps** é uma cultura e conjunto de práticas que integram Desenvolvimento (Dev) e Operações (Ops) para acelerar a entrega de software com mais qualidade e confiabilidade.

**SRE** (Site Reliability Engineering) é uma abordagem de engenharia aplicada às operações de TI para garantir que sistemas e serviços sejam confiáveis, escaláveis e eficientes.

---

## Sistema Web (React)

Aplicação web em React com Vite e React Router.

### Pré-requisitos

- Node.js (recomendado: LTS)
- npm

### Como rodar

```bash
npm install
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173).

### Scripts disponíveis

| Comando        | Descrição              |
|----------------|------------------------|
| `npm run dev`  | Sobe o servidor de desenvolvimento |
| `npm run build`| Gera build de produção  |
| `npm run preview` | Preview do build local |

### Funcionalidades atuais

- **Início** — página inicial com links de navegação
- **Lista** — listagem de itens de exemplo (CI/CD, SRE, etc.)
- **Novo** — formulário para adicionar item (nome e descrição)

### Estrutura do frontend

```
src/
├── components/     # Componentes reutilizáveis (ex.: Layout)
├── pages/          # Páginas/rotas (Home, Lista, Formulario)
├── App.jsx         # Rotas e composição da aplicação
├── main.jsx        # Entrada e providers (Router)
└── index.css       # Estilos globais e variáveis CSS
```

---

## Desenvolvimento do frontend

O desenvolvimento do frontend seguirá as práticas abaixo para manter o código organizado, testável e alinhado com DevOps e entrega contínua.

### Stack e ferramentas

- **React 18** — biblioteca de interface
- **Vite** — build e dev server
- **React Router v6** — roteamento no cliente
- **CSS** — estilos com variáveis globais e arquivos por componente/página

### Organização do código

- **Componentes**: um componente por arquivo, em `src/components/`, com CSS no mesmo nome (ex.: `Layout.jsx` + `Layout.css`).
- **Páginas**: uma página por rota em `src/pages/`, cada uma com seu CSS.
- **Rotas**: centralizadas em `App.jsx`; novas telas são novas rotas e novos arquivos em `pages/`.
- **Estilos**: variáveis de tema em `src/index.css`; componentes e páginas usam essas variáveis para cores e espaçamentos.

### Convenções

- Nomes de componentes em PascalCase; arquivos de componente/página seguem o nome do componente.
- Evitar lógica pesada dentro de componentes de apresentação; extrair para funções ou hooks quando crescer.
- Manter páginas e componentes focados em uma responsabilidade (single responsibility).

### Fluxo de desenvolvimento

1. **Nova funcionalidade**: criar ou ajustar componente/página em `components/` ou `pages/`, registrar rota em `App.jsx` se for nova tela.
2. **Estilos**: usar variáveis do `index.css`; criar arquivo `.css` ao lado do componente quando fizer sentido.
3. **Integração com backend**: quando houver API, criar camada de serviços (ex.: `src/services/`) para chamadas HTTP e usar nos componentes/páginas.
4. **Build e deploy**: `npm run build` gera a pasta `dist/`; o deploy será feito a partir dessa pasta (CI/CD conforme pipeline do projeto).

### Próximos passos sugeridos

- Definir e documentar contrato da API (endpoints, payloads) para integrar lista e formulário.
- Incluir tratamento de loading e erros nas telas que consumirem API.
- Adicionar testes (ex.: React Testing Library) para componentes críticos.
- Configurar pipeline de CI para rodar lint e testes a cada push/PR.
