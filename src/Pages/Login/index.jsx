import "./Login.scss";
import React, { useState } from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConfig";

const Login = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  // Estados para Login
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Estados para Cadastro
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  // Firebase Hooks
  const [
    createUserWithEmailAndPassword,
    userCreate,
    loadingCreate,
    errorCreate,
  ] = useCreateUserWithEmailAndPassword(auth);

  const [
    signInWithEmailAndPassword,
    userLogin,
    loadingLogin,
    errorLogin,
  ] = useSignInWithEmailAndPassword(auth);

  // Cadastro
  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(signUpEmail, signUpPassword);
    console.log("Usuário criado:", userCreate);

  };

  // Login
  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(loginEmail, loginPassword);
  };

  // Mostra carregando
  const isLoading = loadingCreate || loadingLogin;

  return (
    <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          {/* FORMULÁRIO DE LOGIN */}
          <form className="sign-in-form" onSubmit={handleSignIn}>
            <h2 className="title">ENTRAR</h2>

            <div className="input-field">
              <FaUser className="icon" />
              <input
                type="email"
                placeholder="Email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-field">
              <FaLock className="icon" />
              <input
                type="password"
                placeholder="Senha"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" disabled={isLoading}>
              {loadingLogin ? "Entrando..." : "Logar"}
            </button>

            {errorLogin && (
              <p className="error-text">Erro: {errorLogin.message}</p>
            )}
          </form>

          {/* FORMULÁRIO DE CADASTRO */}
          <form className="sign-up-form" onSubmit={handleSignUp}>
            <h2 className="title">REGISTRE-SE</h2>

            <div className="input-field">
              <FaEnvelope className="icon" />
              <input
                type="email"
                placeholder="Email"
                value={signUpEmail}
                onChange={(e) => setSignUpEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-field">
              <FaLock className="icon" />
              <input
                type="password"
                placeholder="Senha"
                value={signUpPassword}
                onChange={(e) => setSignUpPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" disabled={isLoading}>
              {loadingCreate ? "Cadastrando..." : "Cadastrar"}
            </button>

            {errorCreate && (
              <p className="error-text">Erro: {errorCreate.message}</p>
            )}
          </form>
        </div>
      </div>

      {/* PAINÉIS LATERAIS */}
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Novo por aqui?</h3>
            <p>Cadastre-se para começar!</p>
            <button
              className="btn transparent"
              onClick={() => setIsSignUpMode(true)}
            >
              CADASTRE-SE
            </button>
          </div>
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Já tem uma conta?</h3>
            <p>Entre para continuar.</p>
            <button
              className="btn transparent"
              onClick={() => setIsSignUpMode(false)}
            >
              ENTRAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
