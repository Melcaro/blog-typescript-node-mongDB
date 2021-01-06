import React from 'react';
import * as Types from '../../../commons/Types';

import { Categories } from './Categories';
import { Tags } from './Tags';

export class HomePage extends React.Component<
  Types.ICategoriesAndTagsProps,
  Types.IHomePageState
> {
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
