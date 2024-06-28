import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://api.example.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        // Lưu token vào local storage hoặc xử lý đăng nhập thành công
        console.log("Đăng nhập thành công", data);
      } else {
        // Xử lý lỗi đăng nhập
        console.error("Đăng nhập thất bại", data);
      }
    } catch (error) {
      console.error("Có lỗi xảy ra", error);
    }
  };

  return (
    <div className="login-page">
      <div className="login-image">
        <div className="login-text">
          <h1>Turn Your Ideas into reality</h1>
          <p>Start for free and get attractive offers from the community</p>
        </div>
      </div>
      <div className="login-container">
        <div className="login-box">
          <h2>Login</h2>
          <p>Welcome Back! Please enter your details.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group" style={{}}>
              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email"
              
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <input type="checkbox" />
              <label>Remember me for 30 days</label>
              <a href="/forgot-password" className="forgot-password" style={{margin:10, marginLeft: 50}}>
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="login-button"
              style={{ backgroundColor: "black", color: "white" }}
            >
              Log in
            </button>
          </form>
          <button className="register-button">Register</button>
          <div className="divider">OR</div>
          <button className="google-login">
            <img
              src="https://i.pinimg.com/originals/74/65/f3/7465f30319191e2729668875e7a557f2.png"
              alt="Google"
              style={{ height: 20, width: 20 }}
            />
            Sign In With Google
          </button>
          <p className="sign-up">
            Don't have an account? <a href="/sign-up">Sign up for free</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
