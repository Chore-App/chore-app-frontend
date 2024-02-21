// src/store.ts
import { configureStore, ThunkAction, Action, compose, combineReducers } from '@reduxjs/toolkit';

import rootReducer from './rootReducer';
import { buildGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';

// allows for any preloadedState during store configuration
let preloadedState = {}


const store = configureStore({
    reducer: rootReducer,
    preloadedState: preloadedState,
    middleware: (getDefaultMiddleware)=> 
    getDefaultMiddleware({
        serializableCheck: false,
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// add more reducers here
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default store;
