import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../Context/Context';
import facebookIcon from '../Images/facebook.png';
import googleIcon from '../Images/google.png';
import appleIcon from '../Images/apple.png';
import riotIcon from '../Images/riotIcon.png';
import setaImg from '../Images/seta.png';
import '../CSS/Login.css';

function Login() {
  const { user, setUser } = useContext(Context);

  const [logingClass, setlogingClass] = useState(false);
  const [passwordClass, setPasswordClass] = useState(false);
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const btnDisabledFunc = () => {
    if (password && password.length >= 6 && user) return false;
    else return true;
  };

  const btnFunc = () => {
    navigate('/home');
    console.log('sad');
  };

  return (
    <main>
      <section className="login">
        <div className="wrapper">
          <img src={riotIcon} className="login__logo" />

          <h1 className="login__title">Fazer login</h1>

          <label className="login__label">
            <span className={logingClass && 'span-active'}>nome de usuário</span>
            <input
              type="text"
              name="username"
              className="input"
              value={user}
              onChange={({ target }) => {
                setUser(target.value);
              }}
              onFocus={() => {
                setlogingClass(true);
              }}
              onBlur={({ target }) => {
                if (target.value === '') setlogingClass(false);
              }}
            />
          </label>

          <label className="login__label">
            <span className={passwordClass && 'span-active'}>senha</span>
            <input
              type="password"
              name="password"
              className="input"
              value={password}
              onChange={({ target }) => {
                setPassword(target.value);
              }}
              onFocus={() => {
                setPasswordClass(true);
              }}
              onBlur={({ target }) => {
                if (target.value === '') setPasswordClass(false);
              }}
            />
          </label>

          <div className="login__icons">
            <button type="button" className="icons__button">
              <img src={facebookIcon} />
            </button>

            <button type="button" className="icons__button">
              <img src={googleIcon} />
            </button>

            <button type="button" className="icons__button">
              <img src={appleIcon} />
            </button>
          </div>

          <label className="login__label--checkbox">
            <input type="checkbox" className="input--checkbox" />
            Manter login
          </label>
        </div>

        <div className="wrapper">
          <button
            type="button"
            className="login__button"
            disabled={btnDisabledFunc()}
            onClick={btnFunc}>
            <img src={setaImg} className="setaImg" />
          </button>

          <a href="/" className="login__link">
            não consegue iniciar sessão?
          </a>
          <a href="/" className="login__link">
            criar conta
          </a>
        </div>
      </section>

      <section className="wallpaper"></section>
    </main>
  );
}

export default Login;
