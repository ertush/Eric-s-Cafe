import { createSlice } from '@reduxjs/toolkit'

// Slice
const slice = createSlice({
    name: 'quantity',
    initialState: {
        quantity: 1
    },
    reducers: {
    
        editQuantity: (state, action) => {
            state.quantity = action.payload;
        }

    },
});
export default slice.reducer

// Action
const { editQuantity } = slice.actions

export const incDecQuantity = (quantity) => async dispatch => {
    try {
        dispatch(editQuantity(quantity));
    } catch (e) {
        return console.error(e.message);
    }
}
