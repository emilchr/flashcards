import { createSlice } from "@reduxjs/toolkit";

// Slice
export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {
            '123': {
                id: '123',
                name: 'example topic',
                icon: 'https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/calendar.svg',
                quizIds: ['456']
              }
        }
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
        addQuizId: (state, action) => {
            const { topicId, id } = action.payload;
            state.topics[topicId].quizIds.push(id); // adds quizId to quizIds in topicsSlice
    
        }
    },
    

})

// Action creators
export const { addTopic, addQuizId } = topicsSlice.actions;

// SELECTORS
export const selectTopics = (state) => state.topics.topics; // Selects topics nested inside initialState

export default topicsSlice.reducer;