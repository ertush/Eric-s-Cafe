import { createSlice } from '@reduxjs/toolkit'

// Slice
const slice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        addDeleteCartSuccess: (state, action) => {
            state.cart = action.payload;
        }
    },
});
export default slice.reducer

// Action
const { addDeleteCartSuccess } = slice.actions
export const addDeleteCart = (cart) => async dispatch => {
    try {
        dispatch(addDeleteCartSuccess(cart));
    } catch (e) {
        return console.error(e.message);
    }
}
