import React, { useState } from 'react';
import './style.css';

const API = "http://localhost:3000";

function Home() {
  const [isSignIn, setIsSignIn] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [msg, setMsg] = useState({ text: "", type: "" });

  function showMsg(text, type) {
    setMsg({ text, type });
    setTimeout(() => setMsg({ text: "", type: "" }), 3000);
  }

  async function handleSignIn(e) {
    e.preventDefault();

    try {
      const res = await fetch(`${API}/usuarios?email=${email}&password=${password}`);
      const data = await res.json();

      if (data.length > 0) {
        showMsg(`Bem-vindo, ${data[0].name || "usuário"}!`, "success");
      } else {
        showMsg("Email ou senha incorretos.", "error");
      }
    } catch {
      showMsg("Erro ao conectar com o servidor.", "error");
    }
  }

  async function handleSignUp(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      showMsg("As senhas não conferem.", "error");
      return;
    }

    try {
      const res = await fetch(`${API}/usuarios`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, password }),
      });

      if (res.status === 201) {
        showMsg("Conta criada com sucesso! Faça login.", "success");
        setEmail("");
        setPassword("");
        setName("");
        setConfirmPassword("");
        setIsSignIn(true);
      } else {
        showMsg("Erro ao criar conta. Tente outro email.", "error");
      }
    } catch {
      showMsg("Erro ao conectar com o servidor.", "error");
    }
  }

  return (
    <div className="container">
      <div className="buttonsForm">
        <div
          className="bntColor"
          style={{ left: isSignIn ? "0%" : "108px" }}
        ></div>
        <button id="btnSignin" onClick={() => setIsSignIn(true)}>Sign in</button>
        <button id="btnSignup" onClick={() => setIsSignIn(false)}>Sign up</button>
      </div>

      {msg.text && (
        <div className={`msg msg-${msg.type}`}>{msg.text}</div>
      )}

      <form id="signin" style={{ left: isSignIn ? "0%" : "-100%" }} onSubmit={handleSignIn}>
        <div className="input-container">
          <i className="fa-solid fa-envelope"></i>
          <input type="text" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-container">
          <i className="fa-solid fa-lock"></i>
          <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="divCheck">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember password</label>
        </div>
        <button type="submit">Sign in</button>
      </form>

      <form id="signup" style={{ left: isSignIn ? "100%" : "0%" }} onSubmit={handleSignUp}>
        <div className="input-container">
          <i className="fa-solid fa-envelope"></i>
          <input type="text" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-container">
          <i className="fa-solid fa-user"></i>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="input-container">
          <i className="fa-solid fa-lock"></i>
          <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="input-container">
          <i className="fa-solid fa-lock"></i>
          <input type="password" placeholder="Confirm Password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <div className="divCheck">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">Terms</label>
        </div>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default Home;
