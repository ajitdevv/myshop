import { configureStore } from '@reduxjs/toolkit';
import additemsReducer from './slice';
import productsReducer from './dummyproducts';

const store = configureStore({
    reducer: {
        cart: additemsReducer,
        products: productsReducer, 

    },
});

export default store;