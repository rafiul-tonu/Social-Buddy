import React from 'react';

const Nomatch = () => {
  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'red'
  }
  return (
    <div style={style} >
      <h1> No Route Found!!!! </h1>
    </div>
  );
};

export default Nomatch;