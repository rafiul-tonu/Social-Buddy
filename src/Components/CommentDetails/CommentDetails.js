import React from 'react';

const CommentDetails = (props) => {
  console.log(props.item)
  const {name, email, body} = props.item;
  return (
    <div>
      <h1> Comment </h1>
      <h2> {name} </h2>
      <p> <small> email:{email} </small> </p>
      <h3> body: {body}</h3>
    </div>
  );
};

export default CommentDetails;