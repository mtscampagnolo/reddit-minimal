import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const loadPosts = createAsyncThunk(
  'postList/loadPosts',
  async () => {
    const response = await fetch('https://www.reddit.com/.json');
    const json = await response.json();
    return json.data.children.map(({data}) => {
      return {
        author: data.author,
        title: data.title,
        subreddit: data.subreddit_name_prefixed,
        ups: data.ups,
        created: data.created,
        thumbnail: data.url
      }
    })
  }
);

export const getPostBySubreddit = createAsyncThunk(
  'postList/getPostBySubreddit',
  async (subreddit) => {
    const response = await fetch(`https://www.reddit.com/${subreddit}/.json`);
    const json = await response.json();
    return json.data.children.map(({data}) => {
      return {
        author: data.author,
        title: data.title,
        subreddit: data.subreddit_name_prefixed,
        ups: data.ups,
        created: data.created,
        thumbnail: data.url
      }
    })
  }
);

const postListSlice = createSlice({
  name: 'postList',
  initialState: {
    posts: [],
    isLoading: false,
    hasError: false
  },
  reducers: {},
  extraReducers: builder => {
    builder
    .addCase(loadPosts.pending, (state) => {
      state.isLoading = true;
      state.hasError = false;
    })

    .addCase(loadPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
      state.hasError = false;
    })

    .addCase(loadPosts.rejected, (state) => {
      state.isLoading = false;
      state.hasError = true;
    })

    .addCase(getPostBySubreddit.pending, (state) => {
      state.isLoading = true;
      state.hasError = false;
    })

    .addCase(getPostBySubreddit.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
      state.hasError = false;
    })

    .addCase(getPostBySubreddit.rejected, (state) => {
      state.isLoading = false;
      state.hasError = true;
    })
  }
})

export const selectPosts = state => {
  if(state.search.term){
    return state.postList.posts.filter(post => {
      const term = new RegExp(state.search.term.toLowerCase());
      return term.test(post.title.toLowerCase());
    })
  }
  return state.postList.posts
};
export const postsIsLoading = state => state.postList.isLoading;
export const postsHasError = state => state.postList.hasError;
export default postListSlice.reducer;
