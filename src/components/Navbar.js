import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav>
      <Link to="/">Home</Link> |{' '}
      {isLoggedIn ? (
        <>
          <Link to="/create">New Post</Link> |{' '}
          <Link to="/dashboard">My Posts</Link> |{' '}
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
