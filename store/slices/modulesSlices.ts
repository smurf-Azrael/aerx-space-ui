import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export type ModulesState = {
    chat: {
        collapsed: boolean,
        minimized: boolean,
        default: boolean
    },
    flow: {
        collapsed: boolean
    },
    space: {
        collapsed: boolean
    },
    collections: {
        collapsed: boolean
    },
    sidebar: {
        collapsed: boolean
    }
}

const initialState: ModulesState = {
    chat: {
        collapsed: false,
        minimized: false,
        default: true
    },
    flow: {
        collapsed: false,
    },
    space: {
        collapsed: false,
    },
    collections: {
        collapsed: false,
    },
    sidebar: {
        collapsed: true,
    }
}

export const collapseChat = createAsyncThunk('modules/collapseChat',
  async () => {}
);
export const minimizeChat = createAsyncThunk('modules/minimizeChat',
  async () => {}
);
export const expandChat = createAsyncThunk('modules/expandChat',
  async () => {}
);

export const collapseFlow = createAsyncThunk('modules/collapseFlow',
    async () => {}
);
export const expandFlow = createAsyncThunk('modules/expandFlow',
    async () => {}
);

export const collapseSpace = createAsyncThunk('modules/collapseSpace',
    async () => {}
);
export const expandSpace = createAsyncThunk('modules/expandSpace',
    async () => {}
);

export const collapseCollections = createAsyncThunk('modules/collapseCollections',
    async () => {}
);
export const expandCollections = createAsyncThunk('modules/expandCollections',
    async () => {}
);

export const triggerSidebar = createAsyncThunk('modules/triggerSidebar',
    async () => {}
);
export const modulesSlice = createSlice({
    name: 'modules',
    initialState,
    reducers: {},

    extraReducers: builder =>{
        builder
        .addCase(collapseChat.fulfilled, (state, action) => {
            state.chat.collapsed = true;
            state.chat.minimized = false;
            state.chat.default = false;
        }).addCase(minimizeChat.fulfilled, (state, action) => {
            state.chat.minimized = true;
            state.chat.collapsed = false;
            state.chat.default = false;
            if(state.flow.collapsed){
                state.flow.collapsed = false;
            }
        })
        .addCase(expandChat.fulfilled, (state, action) => {
            state.chat.default = true;
            state.chat.collapsed = false;
            state.chat.minimized = false;
        })
        .addCase(collapseFlow.fulfilled, (state, action) => {
            state.flow.collapsed = true;
            state.chat.default = true;
            state.chat.collapsed = false;
            state.chat.minimized = false;
        })
        .addCase(expandFlow.fulfilled, (state, action) => {
            state.flow.collapsed = false;
        })
        .addCase(collapseSpace.fulfilled, (state, action) => {
            state.space.collapsed = true;
        })
        .addCase(expandSpace.fulfilled, (state, action) => {
            state.space.collapsed = false;
        }
        ).addCase(collapseCollections.fulfilled, (state, action) => {
            state.collections.collapsed = true;
        }
        ).addCase(expandCollections.fulfilled, (state, action) => {
            state.collections.collapsed = false;
        }
        )
        .addCase(triggerSidebar.fulfilled, (state, action) => {
            state.sidebar.collapsed = !state.sidebar.collapsed;
        }
        )
    }
    })

    export const selectModules = (state: RootState) => state.modules;
    export default modulesSlice.reducer;
