import React from 'react';
import { useHistory } from 'react-router-dom';

const Post = (props) => {
  const {id} = props.post;
  const history = useHistory();
  const handleClick = (postId) => {
    const url = `/posts/${postId}`;
    history.push(url);
  }
  const postStyle = {border:'1px solid red', margin:'10px'}
  return (
    <div style={postStyle} >
      <h2> Id of post: {id} </h2>
      <br/>
      <button onClick={() => handleClick(id) } > See Post </button>
    </div>
  );
};

export default Post;