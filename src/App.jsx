import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'

function TelaAnalise() {
  return (
    <div id="containerOrange">
      <div id="barraFixa1">
        <img src="img/superiores.png" alt="Configurações" id="iconb1" />
      </div>

      <p id="phrase"></p>
      
      <div id="messageBox">
         PQ VC NÃO RESPONDEE?! 
      </div>
      
      <nav>

        <Link to="/investigacao" id="iconButton">
          <img src="img/config.png" alt="Configurações" id="icon" /> 
          <span className="legendaIcone">Configurella</span>
        </Link>
        
        <Link to="/investigacao" id="iconButton">
          <img src="img/mapa.png" alt="Mapa" id="icon" />
          <span className="legendaIcone">Ella mundi</span>
        </Link>
         
        <Link to="/investigacao" id="iconButton">
          <img src="img/rilogiu.png" alt="Relogio" id="icon" />
          <span className="legendaIcone">Ellalógio</span>
        </Link>
         
         <Link to="/investigacao" id="iconButton">
          <img src="img/telefono.png" alt="Telefone" id="icon" />
          <span className="legendaIcone">Ellaphone</span>
        </Link>

         <Link to="/investigacao" id="iconButton">
          <img src="img/virus.png" alt="Virus" id="icon" />
          <span className="legendaIcone">Ella games</span>
        </Link> 

        <Link to="/investigacao" id="iconButton">
          <img src="img/pastinha.png" alt="Pastinha" id="icon" />
          <span className="legendaIcone">Investiguella</span>
        </Link>

         <Link to="/investigacao" id="iconButton">
          <img src="img/invilope.png" alt="Mensagem" id="icon"  />
          <span className="legendaIcone">Ellazap</span>
        </Link>
      </nav>
      
      <div id="barraFixa2">
        <img src="img/voltar.png" alt="Voltar" id="iconb2" />
        <img src="img/casa.png" alt="Casa" id="iconb2" />
        <img src="img/janelas.png" alt="Janelas" id="iconb2" />
      </div>
    </div>
  )
}

function TelaInvestigacao() {
  return (
    <div id="containerYellow">
      <h1 id="titleDark">Casos Procedurais</h1>
      <p id="phraseDark">
        "Cada detalhe da investigação revela falhas em um sistema que deveria proteger."
      </p>
      <nav>
        <Link to="/" id="buttonDark">Voltar para Análise</Link>
        <Link to="/conscientizacao" id="buttonDark">Ir para Conscientização</Link>
      </nav>
    </div>
  )
}

function TelaConscientizacao() {
  return (
    <div id="containerPurple">
      <h1 id="title">Impacto e Educação</h1>
      <p id="phrase">
        "Transformar dados em empatia e conhecimento é a nossa principal ferramenta de prevenção."
      </p>
      <nav>
        <Link to="/" className="button">Voltar para Análise</Link>
        <Link to="/investigacao" className="button">Ir para Investigação</Link>
      </nav>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TelaAnalise />} />
        <Route path="/investigacao" element={<TelaInvestigacao />} />
        <Route path="/conscientizacao" element={<TelaConscientizacao />} />
      </Routes>
    </BrowserRouter>
  )
}