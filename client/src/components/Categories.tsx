import { useHPContent } from '../hooks/useHPContent';

export const Categories = () => {
  const { allCategories } = useHPContent();

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {allCategories &&
          allCategories.map((category: string) => <li>{category}</li>)}
      </ul>
    </div>
  );
};
