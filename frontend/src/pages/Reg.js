// components/Reg.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../components/api'; // Import the registerUser function from api.js
import styles from './Reg.module.css';

function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('customer'); // Default role

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Call registerUser function from api.js
      const userData = { name, email, password, role };
      console.log(userData)
      const response = await registerUser(userData);

      // Handle successful registration
      console.log('User registered successfully:', response);

      // Redirect to sign-in page on successful registration
      navigate('/SignIn');
    } catch (error) {
      // Handle registration failure
      console.error('Registration failed:', error);
    }
  };

  const handleSignInClick = () => {
    navigate('/SignIn');
  };

  return (
    <div className={styles.registrationcontainer}>
      <h2>Sign Up</h2>
      <form className={styles.registrationform} onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label>
          Role:
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="customer">Customer</option>
            <option value="salesman">Salesman</option>
          </select>
        </label>
        <button type="submit">Sign Up</button>
        <button type="button" onClick={handleSignInClick}>Sign In</button>
      </form>
    </div>
  );
}

export default Registration;
