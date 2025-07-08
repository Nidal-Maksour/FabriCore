function Login() {
  return (
    <div className="login-form">
      <h1>
        Fabri<span>Core</span>
      </h1>
      <label id="username" htmlFor="username">
        Username
      </label>
      <br />
      <input 
        type="text"
        id=""
        className="" 
        placeholder="please enter your username"
        value={username} 
        />
      <br />
      <label id="password" htmlFor="password">
        Password
      </label>
      <br />
      <input type="password" placeholder="Please enter your password" />
    </div>
  );
}

export default Login;
