import { RouteComponentProps } from 'react-router-dom';
export interface IBlogPost {
  postId?: string;
  postTitle: string;
  postContent: string;
  postImg: string;
  postCategories: string[];
  postTags: string[];
  authorName: string;
}

export interface INewPostData {
  newPostTitle: string;
  newPostContent: string;
  newPostImg: string;
  newPostTags: string[];
  newPostCategories: string[];
  authorName: string;
}

export interface IHomePageContent {
  allCategories?: string[];
  allTags?: string[];
  postsList: IBlogPost[];
}
export interface IUsePostState {
  postData: IBlogPost;
  newPostData: INewPostData;
}
