import React from 'react';
import * as Types from '../../../commons/Types';

export const Categories: React.FC<Types.ICategoriesProps> = ({
  allCategories,
}) => (
  <div>
    <h2>Categories</h2>
    <ul>
      {allCategories && allCategories.map((category) => <li>{category}</li>)}
    </ul>
  </div>
);
