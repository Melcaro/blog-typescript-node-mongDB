import { RouteComponentProps } from 'react-router-dom';

export interface IBlogPost {
  id: string;
  postTitle: string;
  postContent: string;
  postImg: string;
  postCategories: string[];
  postTags: string[];
  authorName: string;
}

export type ArrayOfCategories = string[];
export type ArrayOfTags = string[];
export type ArrayOfBlogPost = IBlogPost[];

export interface IHomePageContent {
  allCategories?: string[];
  allTags?: string[];
  postsList: IBlogPost[];
}

export interface ICategoriesAndTagsProps extends RouteComponentProps<{}> {
  allCategories?: ArrayOfCategories;
  allTags?: ArrayOfTags;
}

export interface IHomePageState {
  postsList: IBlogPost[];
}

export interface ITagsProps {
  allTags?: ArrayOfTags;
}

export interface ICategoriesProps {
  allCategories?: ArrayOfCategories;
}

export interface IPostProps extends RouteComponentProps<{ postID: string }> {}

export interface INewPostData {
  newPostTitle: string;
  newPostContent: string;
  newPostImg: string;
  newPostTags: ArrayOfTags;
  newPostCategories: ArrayOfCategories;
  authorName: string;
}

export interface IPostEditorState {
  newPostData: INewPostData;
}

export interface IUsePostState {
  postData: IBlogPost;
  newPostData: INewPostData;
}
