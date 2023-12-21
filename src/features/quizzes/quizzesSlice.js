import { createSlice } from "@reduxjs/toolkit";


// Slice
export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {
            
        },
    },
    reducers: {
        addQuiz: (state, action) => {
                const { id, name, topicId, cardIds } = action.payload;
                state.quizzes[id] = {
                    id,
                    name,
                    topicId,
                    cardIds
                }
        }
    }
})

export const { addQuiz } = quizzesSlice.actions;

// Selectors
export const selectQuizzes = (state) => state.quizzes.quizzes;
export const selectCards = (state) => state.quizzes.quizzes.cardIds;

export default quizzesSlice.reducer;