
                  className={`balaoMsg ${gameState.pistas.includes('pista_diario') ? 'coletado' : ''}`}
                  onClick={() => adicionarPista('pista_diario')}
                >
                  "Ele me ameaçou dizendo que se eu não desativar minha localização, vai quebrar meu celular."
                  <small>{gameState.pistas.includes('pista_diario') ? '✓ Prova Registrada' : '🔍 Clique para Coletar'}</small>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 3. INVESTIGUELLA (Pastinha) */}
      {appAberto === 'investiguella' && (
        <div className="modalGame">
          <div className="modalHeader">
            <span>Investiguella - Pistas ({gameState.pistas.length}/2)</span>
            <button onClick={() => setAppAberto(null)}>X</button>
          </div>
          <div className="modalContent">
            <div className="cardPista">
              1. Diálogo de Agressão / Data: {gameState.pistas.includes('pista_gaslighting') ? '✓ Encontrada' : '🔒 Converse no Ellazap'}
            </div>
            <div className="cardPista">
              2. Diário Secreto: {gameState.pistas.includes('pista_diario') ? '✓ Encontrado' : '🔒 Trancado no Configurella'}
            </div>

            {gameState.status === 'vitoria_camada1' ? (
              <Link to="/investigacao" className="btnSucesso">
                🚨 RUPTURA: AVANÇAR PARA A CAMADA 2
              </Link>
            ) : (
              <p style={{ fontSize: '11px', color: '#aaa', marginTop: '10px' }}>
                Conclua o diálogo no Ellazap para descobrir a senha (`1205`), abra o Configurella e reúna todas as provas.
              </p>
            )}
          </div>
        </div>
      )}

      {/* NAV Original Integrado */}
      <nav>
        <button className="iconButton" id="iconButton" onClick={() => setAppAberto('configurella')}>
          <img src="img/config.png" alt="Configurações" id="icon" /> 
          <span className="legendaIcone">Configurella</span>
        </button>
        
        <button className="iconButton" id="iconButton" onClick={() => setMensagemBox('GPS ativado sem permissão!')}>
          <img src="img/mapa.png" alt="Mapa" id="icon" />
          <span className="legendaIcone">Ella mundi</span>
        </button>
         
        <button className="iconButton" id="iconButton" onClick={() => setMensagemBox('Relógio sincronizado.')}>
          <img src="img/rilogiu.png" alt="Relogio" id="icon" />
          <span className="legendaIcone">Ellalógio</span>
        </button>
         
        <button className="iconButton" id="iconButton" onClick={() => { setMensagemBox('Chamada não atendida de "Ele"'); alterarPerigo(5); }}>
          <img src="img/telefono.png" alt="Telefone" id="icon" />
          <span className="legendaIcone">Ellaphone</span>
        </button>

        <button className="iconButton" id="iconButton" onClick={() => { setMensagemBox('Vírus/Rastreador detectado!'); alterarPerigo(10); }}>
          <img src="img/virus.png" alt="Virus" id="icon" />
          <span className="legendaIcone">Ella games</span>
        </button> 

        <button className="iconButton" id="iconButton" onClick={() => setAppAberto('investiguella')}>
          <img src="img/pastinha.png" alt="Pastinha" id="icon" />
          <span className="legendaIcone">Investiguella</span>
        </button>

        <button className="iconButton" id="iconButton" onClick={() => { setAppAberto('ellazap'); resetChat(); }}>
          <img src="img/invilope.png" alt="Mensagem" id="icon" />
          <span className="legendaIcone">Ellazap</span>
        </button>
      </nav>
      
      {/* Barra Fixa 2 Original */}
      <div id="barraFixa2">
        <img src="img/voltar.png" alt="Voltar" id="iconb2" onClick={() => setAppAberto(null)} />
        <img src="img/casa.png" alt="Casa" id="iconb2" onClick={() => setAppAberto(null)} />
        <img src="img/janelas.png" alt="Janelas" id="iconb2" />
      </div>
    </div>
  )
}

function TelaInvestigacao() {
  return (
    <div id="containerYellow">
      <h1 id="titleDark">Casos Procedurais - Camada 2</h1>
      <p id="phraseDark">
        "Cada detalhe da investigação revela falhas em um sistema que deveria proteger."
      </p>
      <nav style={{ marginTop: '20px' }}>
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
      <nav style={{ marginTop: '20px' }}>
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