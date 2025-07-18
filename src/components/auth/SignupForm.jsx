import React, { useState } from "react";

const SignupForm = () => {
  const [form, setForm] = useState({ email: "", password: "", confirmPassword: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Form submitted", form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Example@email.com"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 rounded bg-white text-black placeholder-gray-400"
          required
        />
      </div>
      <div>
        <label>Create Password</label>
        <input
          type="password"
          name="password"
          placeholder="at least 8 characters"
          value={form.password}
          onChange={handleChange}
          className="w-full p-3 rounded bg-white text-black placeholder-gray-400"
          required
        />
      </div>
      <div>
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="repeat password"
          value={form.confirmPassword}
          onChange={handleChange}
          className="w-full p-3 rounded bg-white text-black placeholder-gray-400"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-yellow-700 hover:bg-yellow-600 text-white py-2 rounded"
      >
        Sign up
      </button>

      <div className="flex items-center gap-2 mt-4">
        <hr className="flex-1 border-gray-600" />
        <span className="text-gray-400 text-sm">Or</span>
        <hr className="flex-1 border-gray-600" />
      </div>

      <button className="w-full flex justify-center items-center bg-white text-black py-2 rounded">
        <img src="./assets/google-icon.png" alt="google icon" className="h-[20px] m-0"/>
        
        Sign in with Google
      </button>
    </form>
  );
};

export default SignupForm;
