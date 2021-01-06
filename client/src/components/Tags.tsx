import React from 'react';
import * as Types from '../../../commons/Types';

export const Tags: React.FC<Types.ITagsProps> = ({ allTags }) => (
  <div>
    <h2>Tags</h2>
    <ul>{allTags && allTags.map((tag) => <li>{tag}</li>)}</ul>
  </div>
);
