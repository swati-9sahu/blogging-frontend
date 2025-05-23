import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from '../api';
import Editor from '../components/Editor';

function EditPost(){
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        API.get(`/posts/${id}`).then((res) => {
            setTitle(res.data.title);
            setContent(res.data.content);
        });
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await API.put(`/posts/${id}`, {title, content});
        alert('Post updated successfully');
        navigate('/dashboard');
    };

    return(
        <form onSubmit={handleSubmit}>
            <h2>Edit Post</h2>
            <input value={title} onChange={(e) => setTitle(e.target.value)} required />
            <Editor content={content} setContent={setContent} />
            <button type="submit">Update</button>
        </form>
    );
}

export default EditPost;