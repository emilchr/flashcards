import { createSlice } from "@reduxjs/toolkit";




export const topics = createSlice({
    name: 'topics',
    initialState: {
        topics: {},
    },
    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon} = action.payload;

        }
    }
})