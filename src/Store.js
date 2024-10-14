// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducers/todoSlice';

export const Store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
