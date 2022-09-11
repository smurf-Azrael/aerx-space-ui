import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { EMessageType } from '../../enums/EMessageType';
import { Message } from '../../types/Message'
import type { RootState } from '../store';

export type MessagesState = {
    messages: Array<Message>
}

const initialState: MessagesState = {
   messages: []
}

export const setMessages = createAsyncThunk('messages/setMessages',
  async (msgString: string,  thunkAPI) => {
    // separate messages by next line
    const messages = msgString.split(/\n/)
    let messagesList: Array<Message> = [];
    console.log(messages)
    messages.forEach((message: string) => {
       let time  = message.split(' ')[0];
       console.log("message after first spliting .... "+message)
       let payload = message.split(' ')[1];
       let sender = payload.split(':')[0];
       let content = payload.split(':')[1];

       const messageObj: Message = {
            id: Math.random().toString(36).substr(2, 9),
            sender: {
                id: sender,
                name: sender,
            },
            type: EMessageType.TEXT,
            content: content,
            createdAt: time,
       }
       messagesList.push(messageObj);
    })
    return messagesList;
  }
);

export const setDirectMessages = createAsyncThunk('messages/setDirectMessages',
  async (messages: Array<Message>,  thunkAPI) => {
    return messages;
  }
);

export const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {},

    extraReducers: builder =>{
        builder
            .addCase(setMessages.fulfilled, (state, {payload}) => {
                state.messages = (payload as unknown as Array<Message>);
            }
            )
            .addCase(setDirectMessages.fulfilled, (state, {payload}) => {
                state.messages = (payload as unknown as Array<Message>);
            }
            );
    }})

    export const selectMessages = (state: RootState) => state.messages;
    export default messagesSlice.reducer;
