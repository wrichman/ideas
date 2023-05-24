import React, { useState } from 'react';
import { auth } from "../base.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Auth() {

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);

        } catch(e) {
            console.error("Sign-In Error:", e);
        }

    }

    return (

    <div className='title m-2'>
        <h3>Sign In with Email & Password!</h3>
        <input onChange = {(e) => setEmail(e.target.value)} placeholder = "Email..."></input>
        <input onChange = {(e) => setPassword(e.target.value)} type = "password" placeholder = "Pasword..."></input>
        <button onClick={signIn}>Sign In</button>
    </div>
  )
}

export default Auth;