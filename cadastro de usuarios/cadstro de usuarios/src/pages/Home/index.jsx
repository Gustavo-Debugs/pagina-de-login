import React, { useState } from 'react';
import './style.css';

function Home() {
  const [isSignIn, setIsSignIn] = useState(true);

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

      <form
        id="signin"
        style={{ left: isSignIn ? "0%" : "-100%" }}
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="input-container">
          <i className="fa-solid fa-envelope"></i>
          <input type="text" placeholder="Email" required />
        </div>
        <div className="input-container">
          <i className="fa-solid fa-lock"></i>
          <input type="password" placeholder="Password" required />
        </div>
        <div className="divCheck">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember password</label>
        </div>

        <button type="submit">Sign in</button>
      </form>

      <form
        id="signup"
        style={{ left: isSignIn ? "100%" : "0%" }}
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="input-container">
          <i className="fa-solid fa-envelope"></i>
          <input type="text" placeholder="Email" required />
        </div>
        <div className="input-container">
          <i className="fa-solid fa-lock"></i>
          <input type="password" placeholder="Password" required />
        </div>
        <div className="input-container">
          <i className="fa-solid fa-lock"></i>
          <input type="password" placeholder="Confirm Password" required />
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
