import {createSlice} from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name:'search',
  initialState: {term:''},
  reducers: {
    updateTerm: (state, action) => {
      state.term = action.payload;
    }
  }
})


export const selectTerm = state => state.search.term;
export const {updateTerm} = searchSlice.actions;
export default searchSlice.reducer;