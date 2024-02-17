import LoginForm from "./Login.jsx";

export default function LoginPage() {
  const handleLogin = (credentials) => {
    console.log("Login credentials:", credentials);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}
