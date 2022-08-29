import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Feed } from '../../types/Post';
import type { RootState } from '../store';

export type PostsState = {
    feeds: Array<Feed>
}

const initialState: PostsState = {
   feeds: []
}

export const setFeeds = createAsyncThunk('posts/setFeeds',
  async (feeds:Array<Feed>, thunkAPI) => {
    return feeds
  }
);

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},

    extraReducers: builder =>{
        builder
            .addCase(setFeeds.fulfilled, (state, {payload}) => {
                state.feeds = (payload as unknown as Array<Feed>);
            }
            )
    }
    })

    export const selectPosts = (state: RootState) => state.posts;
    export default postsSlice.reducer;
