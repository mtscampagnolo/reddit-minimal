import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const loadSubreddits = createAsyncThunk(
  'subreddits/loadSubreddits',
  async () => {
    const response = await fetch('https://www.reddit.com/subreddits/.json');
    const json = await response.json();
    return json.data.children.map(item => item.data.display_name_prefixed);
  }
);

const subredditsSlice = createSlice({
  name: 'subreddits',
  initialState: {
    subreddits: [],
    isLoading: false,
    hasError: false
  },
  reducers: {},
  extraReducers: builder => {
    builder
    .addCase(loadSubreddits.pending, (state) => {
      state.isLoading = true;
      state.hasError = false;
    })
        
    .addCase(loadSubreddits.fulfilled, (state, action) => {
      state.subreddits = action.payload
      state.isLoading = false;
      state.hasError = false;
    })
        
    .addCase(loadSubreddits.rejected, (state) => {
      state.isLoading = false;
      state.hasError = true;
    })
  }
});

export const selectSubreddits = state => state.subreddits.subreddits;
export const subredditsIsLoading = state => state.subreddits.isLoading;
export const subredditsHasError = state => state.subreddits.hasError;
export default subredditsSlice.reducer;
