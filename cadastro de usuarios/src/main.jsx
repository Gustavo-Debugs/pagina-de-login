// Importa o StrictMode do React, que ajuda a identificar problemas no código durante o desenvolvimento.
// Ele não afeta o comportamento da aplicação em produção.
import { StrictMode } from 'react' 

// Importa a função createRoot da nova API de criação de raiz do React 18 (react-dom/client),
// que substitui o método antigo ReactDOM.render.
import { createRoot } from 'react-dom/client'

// Importa o arquivo CSS global da aplicação para aplicar estilos básicos.
import './index.css'

// Importa o componente principal da aplicação, que neste caso é a página "Home".
import Home from './pages/Home'

// Cria a raiz da aplicação vinculada ao elemento HTML com id 'root' (normalmente definido no index.html)
// Em seguida, renderiza o componente <Home /> dentro de <StrictMode> para ativar verificações extras.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home /> {/* Componente principal da interface */}
  </StrictMode>,
)
