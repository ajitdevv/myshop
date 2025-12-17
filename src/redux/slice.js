import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value:0,
}

const additems=createSlice({
    name:"cart",
    initialState ,
    reducers:{
        additem:(state)=>{
            state.value +=1;
        }
    }
})
export const {additem}=additems.actions;
export default additems.reducer