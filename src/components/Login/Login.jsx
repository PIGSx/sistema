
import './Login.scss'
import React, { useState } from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const Login = () => {

  const [isSignUpMode, setIsSignUpMode] = useState(false);

  return (
    // Div principal que envolve todo o formulário. Adiciona a classe "sign-up-mode" dinamicamente com base no estado.
  <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>

    {/* Container dos formulários */}
    <div className="forms-container">
      <div className="signin-signup">
        {/* Formulário de login */}
        <form className="sign-in-form" onSubmit={(e) => e.preventDefault()}>
          <h2 className="title">ENTRAR</h2>

          {/* Campo de nome de usuário com ícone */}
          <div className="input-field">
            <FaUser className='icon'/>
            <input type="text" placeholder="usuário" />
          </div>

          {/* Campo de senha com ícone */}
          <div className="input-field">
            <FaLock className='icon'/>
            <input type="password" placeholder="senha" />
          </div>
        </form>

        {/* Formulário de cadastro */}
        <form className="sign-up-form" onSubmit={(e) => e.preventDefault()}>
          <h2 className="title">REGISTRE-SE</h2>

          {/* Campo de nome de usuário com ícone */}
          <div className="input-field">
            <FaUser className='icon'/>
            <input type="text" placeholder="usuário" />
          </div>

          {/* Campo de e-mail com ícone */}
          <div className="input-field">
            <FaEnvelope className='icon' />
            <input type="email" placeholder="email" />
          </div>

          {/* Campo de senha com ícone */}
          <div className="input-field">
            <FaLock className='icon'/>
            <input type="password" placeholder="senha" />
          </div>
        </form>
      </div>
    </div>

    {/* Container dos painéis laterais */}
    <div className="panels-container">
      {/* Painel esquerdo (para novos usuários) */}
      <div className="panel left-panel">
        <div className="content">
          <h3>Novo por aqui?</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
            ex ratione. Aliquid!
          </p>

          {/* Botão que ativa o modo de cadastro (sign-up-mode) */}
          <button
            className="btn transparent"
            onClick={() => setIsSignUpMode(true)}
          >
        CADASTRE-SE
          </button>
        </div>
      </div>

      {/* Painel direito (para usuários existentes) */}
      <div className="panel right-panel">
        <div className="content">
          <h3>Já tem cadastro ?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            laboriosam ad deleniti.
          </p>

          {/* Botão que ativa o modo de login (remove sign-up-mode) */}
          <button
            className="btn transparent"
            onClick={() => setIsSignUpMode(false)}
          >
            clique aqui
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login