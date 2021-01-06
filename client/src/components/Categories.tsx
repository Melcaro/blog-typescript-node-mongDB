import React from 'react';

interface ICategoriesProps {
  allCategories?: string[];
}

export const Categories: React.FC<ICategoriesProps> = ({ allCategories }) => (
  <div>
    <h2>Categories</h2>
    <ul>
      {allCategories && allCategories.map((category) => <li>{category}</li>)}
    </ul>
  </div>
);
