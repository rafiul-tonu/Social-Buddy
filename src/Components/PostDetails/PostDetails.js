import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import './PostDetails.css';

const PostDetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({})
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setPost(data))
  }, [])
  const { title, body } = post;

  return (
    <>
      <div className="firstDiv">
        <h2> Post Title: {title} </h2>

        <h4> Description: {body} </h4>
      </div>

      <div className="secondDiv">
        <Comment></Comment>
      </div>
    </>
  );
};

export default PostDetails;