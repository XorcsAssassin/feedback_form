import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {loginUser} from '../components/api'
import styles from "./SignIn.module.css"

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()
  const handleSubmit=async(event)=>{
    event.preventDefault()
    try {
      const userData = { email, password };
      console.log("User data submitted:", userData);
      const response = await loginUser(userData);

      console.log("User successfully logged in:", response);

      if (response && response.user && response.user.role) {
        const { role, token } = response.user;
        console.log("User role:", role);
        localStorage.setItem('token', token)
        if (role === 'customer') {
          navigate('/Dashboard');
        } else if (role === 'salesman' || role === 'salesperson') {
          navigate('/salesperson-Dashboard');
        } else {
          console.error("Unknown user role:", role);
        }
      } else {
        console.error("Invalid response structure:", response);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className={styles.signincontainer}>
      <h2>Sign In</h2>
      <form className={styles.signinform} onSubmit={handleSubmit}>
        <label>
          Email:
          <input 
          type="email" 
          value={email} 
          onChange={(e)=>setEmail(e.target.value)}
          required />
        </label>
        <label>
          Password:
          <input 
          type="password" 
          value={password} 
          onChange={(e)=>setPassword(e.target.value)}
          required />
        </label>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
