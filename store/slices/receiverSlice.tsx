import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export type ActiveReceiverState = {
    accountId: string | null
}

const initialState: ActiveReceiverState = {
   accountId: null
}

export const setActiveReceiver = createAsyncThunk('activeReceiver/set',
  async (accountId: string, thunkAPI) => {
    return accountId
  }
);

export const activeReceiverSlice = createSlice({
    name: 'activeReceiver',
    initialState,
    reducers: {},

    extraReducers: builder =>{
        builder
            .addCase(setActiveReceiver.fulfilled, (state, {payload}) => {
                state.accountId = payload;
            }
            )
    }
    })

    export const selectActiveReceiver = (state: RootState) => state.activeReceiver;
    export default activeReceiverSlice.reducer;
