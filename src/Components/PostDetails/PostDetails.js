import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

const PostDetails = () => {
  const {postId} = useParams();
  const [post, setPost] = useState({})
  useEffect(() =>{
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setPost(data))
  },[])
  const {title, body} = post;
  return (
    <div>
      <h2> title: {title} </h2>
      <h4> body: {body} </h4>

      <Comment></Comment>
      
    </div>
  );
};

export default PostDetails;