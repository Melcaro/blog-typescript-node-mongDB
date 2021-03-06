import { useHPContent } from '../hooks/useHPContent';

export const PostEditor = () => {
  const { allCategories, allTags } = useHPContent();
  return (
    <div>
      <h1>Write a new article</h1>
      <form action="" method="post">
        <label htmlFor="postTitle">Enter the post title</label>
        <input id="postTitle" type="text" name="postTitle" />
        <label htmlFor="postContent">Content:</label>
        <textarea
          cols={30}
          rows={10}
          wrap="soft"
          id="postContent"
          name="postContent"
        />
        <label htmlFor="postCategories">Categories</label>
        <input type="text" id="postCategories" list="categoriesList" />
        <datalist id="categoriesList">
          {allCategories &&
            allCategories.map((category) => <option>{category}</option>)}
        </datalist>

        <label htmlFor="postTags">Tags</label>
        <input type="text" id="postTags" list="TagsList" />
        <datalist id="TagsList">
          {allTags && allTags.map((tag) => <option>{tag}</option>)}
        </datalist>
        <label htmlFor="postImg">Add an image for your article</label>
        <input type="file" name="postImg" id="postImg" />
        <button type="submit">Publish</button>
      </form>
    </div>
  );
};
