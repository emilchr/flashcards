import { createSlice } from "@reduxjs/toolkit";


// Slice
export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon } = action.payload;
            state.topics[id] = {
                id,
                name,
                icon,
                quizIds: []
            }
        }
    }
})

// SELECTORS
export const selectTopics = (state) => state.topics.topics; // Selects topics nested inside initialState
export const { addTopic } = topicsSlice.actions;
export const topicsReducer = topicsSlice.reducer;