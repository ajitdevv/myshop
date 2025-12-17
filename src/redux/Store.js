import { configureStore } from '@reduxjs/toolkit';
import  additemsReducer from './slice';

const store = configureStore ({
  reducer: {
    cart:additemsReducer,
  },
});

export default store;