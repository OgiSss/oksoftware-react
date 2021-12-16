import { configureStore } from '@reduxjs/toolkit'
import tableReducer from '../store/tableSlice';
import userReducer from '../store/userSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        table: tableReducer
    },
})