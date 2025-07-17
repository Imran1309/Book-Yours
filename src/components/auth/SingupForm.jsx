import React, { useState } from "react";

export default function Signup() {
  const [form, setForm] = useState({ email: "", password: "", confirmPassword: "" });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // TODO: call server API to register
    console.log("Registering", form);
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="email"
          name="email"
          placeholder="Example@email.com"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Create Password"
          minLength={8}
          value={form.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign up</button>
      </form>
      <div className="alt">
        <span>Or</span>
        <button className="google-signin">Sign in with Google</button>
      </div>
      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
}
;
