import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Feed } from '../../types/Post';
import type { RootState } from '../store';

export type EventsState = {
    click: boolean,
    longPress: boolean
}

const initialState: EventsState = {
   click: false,
   longPress: false
}

export const setClick = createAsyncThunk('chargePostEvents/setClick',
  async () => {
    
  }
);

export const setLongPress = createAsyncThunk('chargePostEvents/setLongPress',
  async () => {
    
  }
);

export const reset = createAsyncThunk('chargePostEvents/reset',
  async () => {
    
  }
);

export const chargePostEventsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},

    extraReducers: builder =>{
        builder
           .addCase(setClick.fulfilled, (state) => {
                state.click = true;
                state.longPress = false;
            })
            .addCase(setLongPress.fulfilled, (state) => {
                state.click = false;
                state.longPress = true;
            }
            )
            .addCase(reset.fulfilled, (state) => {
                state.click = false;
                state.longPress = false;
            }
            )
    }
    })

    export const selectChargePostEvent = (state: RootState) => state.chargePostEvents;
    export default chargePostEventsSlice.reducer;
