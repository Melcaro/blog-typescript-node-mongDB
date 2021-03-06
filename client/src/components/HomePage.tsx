import React from 'react';
import { useHPContent } from '../hooks/useHPContent';

import { Categories } from './Categories';
import { Tags } from './Tags';

export const HomePage = () => {
  const { postsList } = useHPContent();
  return (
    <div>
      <h2> Lasts posts</h2>
      <ul>{postsList && postsList.map((post) => <li>{post.postTitle}</li>)}</ul>
      <Categories />
      <Tags />
    </div>
  );
};
