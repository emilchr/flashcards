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
        },
    },
    extraReducers: {
        addQuizId: (state, action) => {
            const { topicId, quizId } = action.payload;
            state.topics[topicId].quizIds.push(quizId); // adds quizId to quizIds in topicsSlice

        }
    }

})


export const { addTopic, addQuizId } = topicsSlice.actions;

// SELECTORS
export const selectTopics = (state) => state.topics.topics; // Selects topics nested inside initialState

export const topicsReducer = topicsSlice.reducer;