import React, { useState } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await API.post('/auth/login', form);
    localStorage.setItem('token', res.data.token);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>Email </label>
      <input name="email" placeholder="Email" onChange={handleChange} required /><br />
      <label>Password </label>
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required /><br />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
