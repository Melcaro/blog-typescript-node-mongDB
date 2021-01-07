import { useState } from 'react';
import * as Types from '../../../commons/Types';

const DEFAULT_STATE: Types.IHomePageContent = {
  postsList: [],
  allCategories: [],
  allTags: [],
};

export const useHPContent = () => {
  const [homePageContent, setHomePageContent] = useState(DEFAULT_STATE);
  const { postsList, allCategories, allTags } = homePageContent;

  return {
    postsList,
    allCategories,
    allTags,
  };
};
