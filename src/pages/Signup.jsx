import React from "react";
import SignupForm from "../components/auth/SignupForm";
import cameraImage from "../assets/loginart.jpg"; 

const Signup = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-black text-white">
      
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6">SIGN UP</h2>
          <SignupForm />
          <p className="text-center text-sm mt-6">
            Already have an account?{" "}
            <a href="/login" className="text-yellow-500 hover:underline">
              Login
            </a>
          </p>
          <footer className="text-xs text-center mt-8 text-gray-500">
            © 2025 ALL RIGHTS RESERVED
          </footer>
        </div>
      </div>

      
      <div className='w-full max-w-md p-6'>
        <img
          src={cameraImage}
          alt="camera"
          className="w-full h-full object-cover rounded-l-xl"/>
        

        
        </div>
        
    </div>
  );
};

export default Signup;
