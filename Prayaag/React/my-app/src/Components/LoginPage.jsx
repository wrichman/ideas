import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  
  const navigate = useNavigate();

  return (
    <div className='login-container'>
      <h1 className='m-2'>Hello! 👋 </h1>
      <div className="login-buttons">
        <button onClick={() => navigate('/register')}> Register </button>
        <button onClick={() => navigate('/signIn')}> Sign-In </button>
      </div>
    </div>
  )
}

export default LoginPage;