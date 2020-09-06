import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentDetails from '../CommentDetails/CommentDetails';

const Comment = () => {
  const { postId } = useParams();
  const [comment, setComment] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setComment(data))

  }, [])

  return (
    <div>
      {
        comment.map(item => <CommentDetails item={item} ></CommentDetails>)
      }
    </div>
  );
};

export default Comment;