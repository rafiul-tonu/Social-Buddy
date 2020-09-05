import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Nomatch from './Components/Nomatch/Nomatch';
import PostDetails from './Components/PostDetails/PostDetails';

function App() {
  return (
    <Router>
     <Switch>
       <Route path="/home">
        <Home></Home>
       </Route>
       <Route path="/posts/:postId">
        <PostDetails></PostDetails>
       </Route>
       <Route exact path="/">
        <Home />
       </Route>
       <Route path="*">
         <Nomatch />
       </Route>
     </Switch>
    </Router>
  );
}

export default App;
