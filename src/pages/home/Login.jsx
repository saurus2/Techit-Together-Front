import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function LoginForm({ onLogin }) {
  console.log("onLogin:", onLogin);

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ username, password });
    console.log("ASDFSD");
    navigate("/");
  };

  const signup = () => {
    navigate("/signup");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Username:
          <input
            type="text"
            className="input-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      <div onClick={signup}>Sign up?</div>
    </div>
  );
}
