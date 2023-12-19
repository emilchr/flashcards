import { createSlice } from "@reduxjs/toolkit";



// Slice
export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {},
    },
    reducers: {
        addTopic: (state, action) => {
            //const { id, name, icon} = action.payload;
            state.push(action.payload)
        }
    }
})

// SELECTORS
export const selectTopic = (state) => state.topicsSlice; // Selects topics nested inside initialState