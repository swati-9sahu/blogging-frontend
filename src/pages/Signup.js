import React, { useState } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post('/auth/signup', form);
    alert('Signup successful');
    navigate('/login');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <label>Username </label>
      <input name="username" placeholder="Username" onChange={handleChange} required /> <br />
      <label>Email </label>
      <input name="email" placeholder="Email" onChange={handleChange} required /><br />
      <label>Password </label>
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required /><br />
      <button type="submit">Register</button>
    </form>
  );
}

export default Signup;
