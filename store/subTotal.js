import { createSlice } from '@reduxjs/toolkit'

// Slice
const slice = createSlice({
    name: 'subTotal',
    initialState: {
        subTotal: 0
    },
    reducers: {
    
        aggregateSubTotalSuccess: (state, action) => {
            state.subTotal = action.payload;
        }

    },
});
export default slice.reducer

// Action
const { aggregateSubTotalSuccess } = slice.actions

export const addSubtractToSubTotal = (subTotal) => async dispatch => {
    try {
        dispatch(aggregateSubTotalSuccess(subTotal));
    } catch (e) {
        return console.error(e.message);
    }
}
