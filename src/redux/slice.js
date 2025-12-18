import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items:[],
}

const additems = createSlice({
    name: "cart",
    initialState,
    reducers: {
        additem: (state, action) => {
            // state.value += 1;
console.log(action)
state.items.push(action.payload)

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