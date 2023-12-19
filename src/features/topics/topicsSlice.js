import { createSlice } from "@reduxjs/toolkit";


// Slice
export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            
            state.topics[action.payload.topicId] = {...action.payload, quizId: []} 
            return state;

        }
    }
})

// SELECTORS
export const selectTopics = (state) => state.topics.topics; // Selects topics nested inside initialState
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;