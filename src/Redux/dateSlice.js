import { createSlice } from "@reduxjs/toolkit";

const dateSlice = createSlice({
    name: 'date',
    initialState: {
        date: ''
    },
    reducers: {
        updateDate: (state, action) => {
            state.date = action.payload
        }
    }
})

export const {updateDate} = dateSlice.actions
export default dateSlice.reducer