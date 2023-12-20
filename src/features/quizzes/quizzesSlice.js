import { createSlice } from "@reduxjs/toolkit";


// Slice
export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {
            '04e2256e-15f4-4eb6-a84f-2f8010eaa1f6': {
                id: '04e2256e-15f4-4eb6-a84f-2f8010eaa1f6',
                name: 'Quiz123',
                topicId: '123',
                cardIds: ['1', '2']
            },
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

export default quizzesSlice.reducer;