import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Categories } from './Categories';
import { Tags } from './Tags';

interface IBlogPost {
  id: number;
  postTitle: string;
  postContent: string;
  postImg: string;
  postTags: string[];
  authorName: string;
}

interface IHomePageProps extends RouteComponentProps<{}> {
  allCategories?: string[];
  allTags?: string[];
}

interface IHomePageState {
  postsList: IBlogPost[];
}

export class HomePage extends React.Component<IHomePageProps, IHomePageState> {
  state = {
    postsList: [],
  };
  render() {
    const { postsList } = this.state;
    const { allCategories, allTags } = this.props;
    return (
      <div>
        <h2> Lasts posts</h2>
        <ul>{postsList && postsList.map((post) => <li>post.postTitle</li>)}</ul>
        <Categories allCategories={allCategories} />
        <Tags allTags={allTags} />
      </div>
    );
  }
}
