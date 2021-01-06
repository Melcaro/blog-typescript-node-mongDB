import React from 'react';
import * as Types from '../../../commons/Types';
export class Post extends React.Component<Types.IPostProps, Types.IPostState> {
  state: Types.IPostState = {
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
