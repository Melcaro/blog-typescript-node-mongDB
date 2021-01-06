import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { Post } from './components/Post';
import { PostEditor } from './components/PostEditor';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" render={() => <Header />} />
        <Route exact path="/" render={(props) => <HomePage {...props} />} />
        <Route
          exact
          path="/post/:postID"
          render={(props) => <Post {...props} />}
        />
        <Route
          exact
          path="/postEditor"
          render={(props) => <PostEditor {...props} />}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
