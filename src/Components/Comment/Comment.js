import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentDetails from '../CommentDetails/CommentDetails';

const Comment = () => {
const {postId} = useParams();
const [comment, setComment] = useState([]);
useEffect(() => {
  const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
  fetch(url)
  .then(res => res.json())
  .then(data => setComment(data))
  
}, [])
  // const {name, email, body} = comment;
  return (
    <div>
      {/* <h1> Comment </h1>
      <h2> name: {name}</h2>
      <p><small> email: {email} </small> </p>
      <h4> body: {body}</h4> */}
      {
        comment.map(item => <CommentDetails item={item} ></CommentDetails> )
      }
    </div>
  );
};

export default Comment;