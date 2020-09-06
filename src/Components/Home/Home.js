import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';


const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])
  const firstDivStyle = { textAlign: 'center', color: 'RGB(0, 155, 119)' }

  return (
    <div>
      <div style={firstDivStyle} >
        <h1> Number of Posts:{posts.length} </h1>
      </div>

      <div>
        {
          posts.map(post => <Post post={post} ></Post>)
        }
      </div>
    </div>
  );
};

export default Home;