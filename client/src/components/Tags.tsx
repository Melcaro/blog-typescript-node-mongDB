import { useHPContent } from '../hooks/useHPContent';

export const Tags = () => {
  const { allTags } = useHPContent();
  return (
    <div>
      <h2>Tags</h2>
      <ul>{allTags && allTags.map((tag: string) => <li>{tag}</li>)}</ul>
    </div>
  );
};
