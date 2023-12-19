import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

// Slice
export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {},
    },
    reducers: {
        addQuiz: (state, action) => {
                const { id, topicId } = action.payload;
                state.quizzes[id] = {
                    topicId // stuck here
                }
        }
    }
})

export const { addQuiz } = quizzesSlice.actions;

// Selectors
export const selectQuizzes = (state) => state.quizzes.quizzes;

export const quizzesReducer = quizzesSlice.reducer;