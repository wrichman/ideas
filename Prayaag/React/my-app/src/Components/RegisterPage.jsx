import React, { useState } from 'react';
import { auth } from "../base.js";
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';


function RegisterPage() {
    
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    const [ passwordClasses, setPasswordClasses ] = useState([]);
    
    const createAccount = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setPassword("");
            setConfirmPassword("");
            setPasswordClasses(prev => prev.push("password_classes"));
            console.log("don't match"); 
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch(error) {
            console.error(error);
        }

    }

    const logout = async () => {
        
        try {
            await signOut(auth);
        } catch(error) {
            console.error(error);
        }
    }

    return (
    <div className = "login-container">
        <h2>Create a New Account 😙</h2>
        <form className='m-2' onSubmit = {createAccount}>
            <div className='m-3'>
            <input onChange = {e => setEmail(e.target.value)} placeholder='Enter Email...'></input>

            </div>
            <div className='m-3'>
            <input className = {passwordClasses[0]} value = {password} type = "password" onChange = {e => setPassword(e.target.value)} placeholder='Enter Password...'></input>

            </div>
            <div className='m-3'>
            <input className = {passwordClasses[0]} value = {confirmPassword} type = "password" onChange = {e => setConfirmPassword(e.target.value)} placeholder='Confrim Password...'></input>
            </div>
            <button>Submit</button>
        </form>
        {/* <button onClick = {logout}>Sign Out</button> */}
    </div>
  )
}

export default RegisterPage;