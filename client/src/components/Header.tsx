import React from 'react';
import { Link } from 'react-router-dom';


export const Header = () => {
  return (
    <div>
      <Link to="/">
        <h2>My wonderful Blog</h2>
      </Link>
      <Link to="/postEditor">Add a new post</Link>
    </div>
  );
};
