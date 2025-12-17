import { configureStore } from '@reduxjs/toolkit';
import additemsReducer from './slice';
// import productsReducer from './dummyproducts';

const store = configureStore({
    reducer: {
        cart: additemsReducer,
        // produc: productsReducer,
    },
});

export default store;