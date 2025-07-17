// src/pages/Signup.tsx
import React from 'react';
import SignupForm from '../components/auth/SignupForm';

const Signup = () => {
  return (
    <div className="flex gap-0 justify-center items-center h-full min-h-full w-full">
      <div className="w-full max-w-md p-6 rounded-lg h-[100%] relative">
        <SignupForm />
      </div>
      <div className="w-full max-w-md p-6">
        <img src="../assets/signup-image.jpg" alt="signup" className="rounded-xl" />
      </div>
    </div>
  );
};

export default Signup;
