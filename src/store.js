import {configureStore} from '@reduxjs/toolkit';
import subredditsReducer from './components/subreddits/subredditsSlice';
import postListReducer from './components/postList/postListSlice';

const store = configureStore({
  reducer: {
    subreddits: subredditsReducer,
    postList: postListReducer,
  }
});

export default store;