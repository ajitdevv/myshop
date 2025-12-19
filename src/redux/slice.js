import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    // items: []
    items: localStorage.getItem("products")? JSON.parse(localStorage.getItem("products")) : [],

}

const additems = createSlice({
    name: "cart",
    initialState,
    reducers: {
        additem: (state, action) => {
            // state.value += 1;
            // console.log(action.payload)
            state.items.push(action.payload)
            localStorage.setItem("products", JSON.stringify(state.items))

        },
        removeitem: (state,action) => {
        //    const cartProducts = state.items.filter((items)=>items.id !==action.payload.id)
            state.items=cartProducts
            localStorage.removeItem("products", JSON.stringify(state.items))


        },
        removeallitems: (state) => {
            state.value = 0;
        },
    }
})
export const { additem, removeitem, removeallitems } = additems.actions;
export default additems.reducer