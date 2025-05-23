import React, { useState } from 'react';
import API from '../api';
import Editor from '../components/Editor';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post('/posts', { title, content });
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>New Post</h2>
      <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <Editor content={content} setContent={setContent} />
      <button type="submit">Publish</button>
    </form>
  );
}

export default CreatePost;
