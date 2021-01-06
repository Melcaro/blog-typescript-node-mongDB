import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface IPost {
  id: number;
  postTitle: string;
  postContent: string;
  postImg: string;
  postTags: string[];
  postCategories: string[];
  authorName: string;
}

interface IPostProps extends RouteComponentProps<{ postID: string }> {}

interface IPostState {
  postData: IPost | null;
}

export class Post extends React.Component<IPostProps, IPostState> {
  state: IPostState = {
    postData: null,
  };

  render() {
    return (
      <div>
        <h2>Post page</h2>
      </div>
    );
  }
}
