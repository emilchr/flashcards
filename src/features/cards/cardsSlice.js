import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {
           '1' : { id: '1',
            front: 'Hello',
            back: 'There'
        },
            '2': { id: '2',
            front: 'Hi',
            back: 'Man'
        },
    }
    },
    reducers: {
        addCard: (state, action) => {
            const { id, front, back } = action.payload;

            state.cards = {
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
export const findCardId = (id) => (state) => state.cards.find(state.cards.id === id); 

export default cardsSlice.reducer;