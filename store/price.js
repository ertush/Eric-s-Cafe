import { createSlice } from '@reduxjs/toolkit'

// Slice
const slice = createSlice({
    name: 'price',
    initialState: {
        price: 0
    },
    reducers: {
        editPriceSuccess: (state, action) => {
            state.price = action.payload;
        }

    },
});
export default slice.reducer

// Action
const { editPriceSuccess } = slice.actions

export const incDecPrice = (price) => async dispatch => {
    try {
        dispatch(editPriceSuccess(price));
    } catch (e) {
        return console.error(e.message);
    }
}
