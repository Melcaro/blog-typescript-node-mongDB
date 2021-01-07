import { useState } from 'react';
import * as Types from '../../../commons/Types';

const DEFAULT_STATE: Types.IUsePostState = {
  postData: {
    id: '',
    postTitle: '',
    postContent: '',
    postImg: '',
    postCategories: [],
    postTags: [],
    authorName: '',
  },
  newPostData: {
    newPostTitle: '',
    newPostContent: '',
    newPostImg: '',
    newPostTags: [],
    newPostCategories: [],
    authorName: '',
  },
};

export const usePost = (
  postId?: string,
  newPostDataToSend?: Types.INewPostData
) => {
  const [state, setState] = useState(DEFAULT_STATE);
  const { postData, newPostData } = state;

  return {
    postData,
  };
};
