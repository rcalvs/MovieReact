import React, { useState, useEffect } from 'react';

function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const validateLogin = () => {
      const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
      const minLength = 8;
      const btnLogin = document.querySelector('[data-testid="login-btn"]');

      if (btnLogin) {
        if (emailRegex.test(email) && password.length >= minLength) {
          btnLogin.disabled = false;
        } else {
          btnLogin.disabled = true;
        }
      }
    };
    validateLogin();
  }, [email, password]);

  const handleChange = (event) => {
    const { id, value } = event.target;
    switch (id) {
    case 'email': {
      setEmail(value);
      break;
    }
    case 'password': {
      setPassword(value);
      break;
    }
    default:
      break;
    }
  };

  const handleClick = () => {
    setEmail('');
    setPassword('');
    history.push('/browse');
  };

  return (
    <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col items-center">
      <form className="login">
        <label htmlFor="email">
          Email
          <input
            className="flex border-2"
            id="email"
            type="text"
            placeholder="email@email.com"
            value={ email }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            className="flex border-2"
            id="password"
            type="password"
            placeholder="12345678"
            value={ password }
            onChange={ handleChange }
          />
        </label>
        <button
          className="flex bg-yellow-300 px-8 py-2 m-auto mt-4 border-2"
          type="button"
          data-testid="login-btn"
          onClick={ handleClick }
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;