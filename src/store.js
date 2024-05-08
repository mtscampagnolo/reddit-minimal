import {configureStore} from '@reduxjs/toolkit';
import subredditsReducer from './components/subreddits/subredditsSlice';
import postListReducer from './components/postList/postListSlice';
import searchReducer from './components/search/searchSlice';

const store = configureStore({
  reducer: {
    subreddits: subredditsReducer,
    postList: postListReducer,
    search: searchReducer,
  }
});

export default store;