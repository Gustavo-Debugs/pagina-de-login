// Importa o React e o hook useState para gerenciar o estado do componente
import React, { useState } from 'react';

// Importa o arquivo de estilos CSS que define o visual do componente
import './style.css';

function Home() {
  // Cria um estado booleano chamado 'isSignIn' para alternar entre os formulários de login (true) e cadastro (false)
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="container"> {/* Container principal da página */}

      {/* Botões de navegação entre os formulários */}
      <div className="buttonsForm">
        {/* Elemento visual que desliza para indicar o botão ativo (login ou cadastro) */}
        <div
          className="bntColor"
          style={{ left: isSignIn ? "0%" : "108px" }} // Move o destaque de acordo com o estado
        ></div>

        {/* Botão que ativa o formulário de login */}
        <button id="btnSignin" onClick={() => setIsSignIn(true)}>Sign in</button>

        {/* Botão que ativa o formulário de cadastro */}
        <button id="btnSignup" onClick={() => setIsSignIn(false)}>Sign up</button>
      </div>

      {/* Formulário de login */}
      <form
        id="signin"
        style={{ left: isSignIn ? "0%" : "-100%" }} // Esconde ou mostra o formulário dependendo do estado
        onSubmit={(e) => e.preventDefault()} // Impede o recarregamento da página ao enviar
      >
        {/* Campo de email */}
        <div className="input-container">
          <i className="fa-solid fa-envelope"></i> {/* Ícone de email */}
          <input type="text" placeholder="Email" required />
        </div>

        {/* Campo de senha */}
        <div className="input-container">
          <i className="fa-solid fa-lock"></i> {/* Ícone de cadeado */}
          <input type="password" placeholder="Password" required />
        </div>

        {/* Caixa de seleção "Lembrar senha" */}
        <div className="divCheck">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember password</label>
        </div>

        {/* Botão para enviar o formulário de login */}
        <button type="submit">Sign in</button>
      </form>

      {/* Formulário de cadastro */}
      <form
        id="signup"
        style={{ left: isSignIn ? "100%" : "0%" }} // Esconde ou mostra o formulário dependendo do estado
        onSubmit={(e) => e.preventDefault()} // Impede o recarregamento da página ao enviar
      >
        {/* Campo de email */}
        <div className="input-container">
          <i className="fa-solid fa-envelope"></i>
          <input type="text" placeholder="Email" required />
        </div>

        {/* Campo de senha */}
        <div className="input-container">
          <i className="fa-solid fa-lock"></i>
          <input type="password" placeholder="Password" required />
        </div>

        {/* Campo de confirmação de senha */}
        <div className="input-container">
          <i className="fa-solid fa-lock"></i>
          <input type="password" placeholder="Confirm Password" required />
        </div>

        {/* Caixa de seleção para aceitar os termos */}
        <div className="divCheck">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">Terms</label>
        </div>

        {/* Botão para enviar o formulário de cadastro */}
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

// Exporta o componente para ser usado em outras partes da aplicação
export default Home;
