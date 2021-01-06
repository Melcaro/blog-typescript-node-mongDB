import React from 'react';

interface ITagsProps {
  allTags?: string[];
}

export const Tags: React.FC<ITagsProps> = ({ allTags }) => (
  <div>
    <h2>Tags</h2>
    <ul>{allTags && allTags.map((tag) => <li>{tag}</li>)}</ul>
  </div>
);
