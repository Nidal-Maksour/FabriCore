import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Login({ setIsAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Basic client-side validation
    if (!username || !password) {
      setError('Please fill in both fields.');
      return;
    }

    try {
      // Send login request to backend
      const response = await fetch('http://localhost:8000/Backend/api/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
        // Save JWT token in localStorage
        localStorage.setItem('token', data.token);
        // Update authentication state to true
        setIsAuthenticated(true);
        // Navigate to dashboard or other redirected path
        navigate(data.redirect);
      } else {
        setError(data.message || 'Invalid credentials.');
      }
    } catch (err) {
      setError('Failed to connect to server.');
    }
  };

  return (
    <StyledWrapper>
      <div className="login-body">
        <form onSubmit={handleSubmit}>
          <div className="login-form">
            <h1>
              Fabri<span>Core</span>
            </h1>

            <label htmlFor="username" className="text">
              Email or ID
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username or email"
              className="login-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
            />

            <label htmlFor="password" className="text">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="login-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />

            <button type="submit" id="loginbtn" className="login-control">
              Login
            </button>

            {error && (
              <p className="text" style={{ color: 'red' }}>
                {error}
              </p>
            )}

            <p className="text">
              Forget password? <a href="#">Click here</a>
            </p>
            <p className="text">
              Don't have an account? <a href="#">Click here</a>
            </p>
          </div>
        </form>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .login-body {
    background-color: var(--grayColor);
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .login-form {
    color: var(--darkcolor);
    background-color: var(--lightColor);
    text-align: left;
    width: 400px;
    padding: 40px;
    border: 1px solid var(--lightColor);
    border-radius: 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .login-form h1 {
    font-size: 50px;
    text-align: center;
    color: var(--darkcolor);
  }

  .login-form h1 span {
    color: var(--primaryColor);
  }

  .login-form .login-control {
    width: 90%;
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid var(--darkcolor);
    outline: none;
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 1rem;
    letter-spacing: 1px;
    color: rgba(0, 0, 0, 0.9);
    margin-bottom: 15px;
  }

  #loginbtn {
    background-color: var(--primaryColor);
    color: var(--lightColor);
    width: 100%;
  }

  #loginbtn:hover {
    background-color: var(--lightColor);
    color: var(--darkcolor);
    transition: background-color 0.3s ease;
  }

  .login-form p {
    color: var(--darkcolor);
    font-size: small;
    margin: 5px 0;
  }

  .login-form .text {
    text-align: left;
    width: 100%;
  }
`;

export default Login;
