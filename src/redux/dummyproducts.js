import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchproducts = createAsyncThunk('products', async () => {
    //   const products = await fetch('https://fakestoreapi.com/products');
 products = await fetch('https://dummyjson.com/products');
    const data = await products.json();
    const finalData = data.products;
    return finalData;
})


const initialState = {
    items: [],
    status: [],
    error: null,
}

const products = createSlice({
    name: "productss",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchproducts.fulfilled, (state, action) => {
            state.status = "succeeded",
                state.items = action.items
        }
        )
    }
})

export default products.reducer;
