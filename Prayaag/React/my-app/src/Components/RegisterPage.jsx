import React, { useState } from 'react';


function RegisterPage() {
    
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
  
    return (
    <div className = "login-container">
        <h2>Create a New Account 😙</h2>
        <form className='m-2'>
            <div className='m-3'>
            <input onChange = {e => setEmail(e.target.value)} placeholder='Enter Email...'></input>

            </div>
            <div className='m-3'>
            <input type = "password" onChange = {e => setPassword(e.target.value)} placeholder='Enter Password...'></input>

            </div>
            <div className='m-3'>
            <input type = "password" onChange = {e => setConfirmPassword(e.target.value)} placeholder='Confrim Password...'></input>
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default RegisterPage;