function Login() {
  return (
    <div className="login-body">
      <form action="onclick">
        <div className="login-form">
          <h1>
            Fabri<span>Core</span>
          </h1>

          <label htmlFor="username" className="text">Username or Email</label>
          <input
            type="text"
            id="username"
            name="username"
            className="login-control"
            placeholder="enter your username or email"
          />

          <label htmlFor="password" className="text">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="enter your password"
            className="login-control"
          />

          <button type="submit" id="loginbtn" className="login-control">
            Login
          </button>

          <p className="text">
            Forget password?
            <a href="#">Click here</a>
          </p>
          <p className="text">
            Don't have account?
            <a href="#">Click here</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
