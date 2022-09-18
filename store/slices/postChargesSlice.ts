import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export type postChargesState = {
    postChargers: Array<{
        post_id: string,
        chargers: Array<string>
    }>
}

const initialState: postChargesState  = {
    postChargers: []
}

export const setPostChargers = createAsyncThunk('postChargers/setPostChargers',
  async ({
    post_id,
    chargers
  }: any,  thunkAPI) => {
    // alert(chargers)
    let postChargers  = chargers.split("##") // ["user1", "user2", "user3"]
    let existingPostChargers = initialState.postChargers;
    let postChargersObj = {
        post_id: post_id,
        chargers: postChargers
  }
    // existingPostChargers.push(postChargersObj)
    // alert(JSON.stringify(postChargersObj))
    return postChargersObj
  }
);


export const postChargersSlice = createSlice({
    name: 'postChargers',
    initialState,
    reducers: {},

    extraReducers: builder =>{
        builder
          .addCase(setPostChargers.fulfilled, (state, {payload}) => {
                state.postChargers = [...state.postChargers, payload]
            }
          )
    }})

    export const selectPostChargers = (state: RootState) => state.postChargers;
    export default postChargersSlice.reducer;
