import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: 0,
}

const additems = createSlice({
    name: "cart",
    initialState,
    reducers: {
        additem: (state) => {
            state.value += 1;
        },
        removeitem: (state) => {
            state.value > 0 ? state.value -= 1 : null

        },
        removeallitems: (state) => {
            state.value = 0;
        },
    }
})
export const { additem, removeitem, removeallitems } = additems.actions;
export default additems.reducer