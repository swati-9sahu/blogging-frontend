import React, { useEffect, useState } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    API.get('/posts').then((res) => {
      const userId = JSON.parse(atob(localStorage.getItem('token').split('.')[1])).id;
      setPosts(res.data.filter((p) => p.user_id === userId));
    });
  }, []);

  const handleDelete = async (id) => {
    await API.delete(`/posts/${id}`);
    setPosts(posts.filter((p) => p.id !== id));
  };

  return (
    <div>
      <h2>My Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <button onClick={() => navigate(`/posts/${post.id}`)}>View</button>
          <button onClick={() => navigate(`/edit/${post.id}`)}>Edit</button>
          <button onClick={() => handleDelete(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
