import { usePost } from '../hooks/usePost';

export const Post = (postId: string) => {
  const { postData } = usePost(postId);
  const {
    postTitle,
    postContent,
    postCategories,
    postImg,
    postTags,
    authorName,
  } = postData;

  return (
    <div>
      <h2>{postTitle}</h2>
      <div>
        <img src={postImg} alt={postTitle} />
      </div>
      <div>
        <p>By {authorName}</p>
        <p>{postContent}</p>
      </div>
      <div>
        <ul>
          {postCategories &&
            postCategories.map((category) => <li>{category}</li>)}
        </ul>
        <ul>{postTags && postTags.map((tag) => <li>{tag}</li>)}</ul>
      </div>
    </div>
  );
};
