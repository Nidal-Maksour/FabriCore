import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Send POST request to backend with username and password
      const response = await fetch("http://localhost:8000/Backend/api/login.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      // Read response as text first
      const text = await response.text();

      try {
        // Try to parse JSON from response
        const data = JSON.parse(text);

        // If login is successful, redirect
        if (data.success) {
          window.location.href = data.redirect;
        } else {
          // Show error message returned by backend
          setError(data.message || "Invalid credentials.");
        }
      } catch (jsonError) {
        // JSON parsing error, probably server sent invalid response
        console.error("Invalid JSON:", text);
        setError("Server returned invalid response.");
      }

    } catch (err) {
      // Network or other fetch errors
      console.error("Login error:", err);
      setError("Could not connect to server.");
    }
  };

  return (
    <div className="login-body">
      <form onSubmit={handleSubmit}>
        <div className="login-form">
          <h1>
            Fabri<span>Core</span>
          </h1>

          <label htmlFor="username" className="text">Email or ID</label>
          <input
            type="text"
            id="manager_id"
            name="username"
            className="login-control"
            placeholder="Enter your username or email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password" className="text">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="login-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" id="loginbtn" className="login-control">
            Login
          </button>

          {/* Display error message if any */}
          {error && <p className="text" style={{ color: "red" }}>{error}</p>}

          <p className="text">
            Forget password? <a href="#">Click here</a>
          </p>
          <p className="text">
            Don't have an account? <a href="#">Click here</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;

