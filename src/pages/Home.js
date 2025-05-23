import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../api';

function Home() {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    API.get('/posts').then((res) => setPosts(res.data));
  }, []);

  return (
    <div>
      <h2>All Posts</h2>
      <input
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <button>Search</button>
      {posts
        .filter(
          (p) =>
            p.title.toLowerCase().includes(query) ||
            p.content.toLowerCase().includes(query)
        )
        .map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>By {post.username}</p>
            <Link to={`/posts/${post.id}`}>Read More</Link>
          </div>
        ))}
    </div>
  );
}

export default Home;
