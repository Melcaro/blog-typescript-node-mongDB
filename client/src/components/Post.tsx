import React from 'react';
import { usePost } from '../hooks/usePost';

export const Post = (postId: string) => {
  const { postData } = usePost(postId);

  return (
    <div>
      <h2>Post page</h2>
    </div>
  );
};
