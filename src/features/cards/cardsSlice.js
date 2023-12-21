import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {
           
    }
    },
    reducers: {
        addCard: (state, action) => {
            const { id, front, back } = action.payload;

            state.cards[id] = {
                id,
                front,
                back
            }
        }
    }

})

// Action creators
export const { addCard } = cardsSlice.actions;

// Selectors

export const findCardId = (id) => (state) => state.cards.cards[id];

export default cardsSlice.reducer;