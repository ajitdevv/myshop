import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchProducts = createAsyncThunk('products', async () => {
    //   const products = await fetch('https://fakestoreapi.com/products');
    const products = await fetch('https://dummyjson.com/products');
    const data = await products.json();
    const finalData = data.products;
    // const finalData = data.products;
    return finalData;
})

const initialState = {
    items:[],
    status: "idle",
    error: null,
}

const products = createSlice({
    name: "productss",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = "succeeded",
            state.items = action.payload
        }
        )
    }
})

export default products.reducer;
