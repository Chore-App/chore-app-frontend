// src/counterSlice.ts
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import APIClient from './api/api'


// change and relocate this variable in this future
const API_URL = 'http://localhost:8080'
const client = new APIClient(API_URL)

// sample thunk function replace when redundant
export const fetchUserCount = createAsyncThunk<number>('counter/fetchUserCount', 
async() => {
  const response = await client.getUserCount()
  if (response?.status === 200) {
    console.log(response.data)
    return(response.data)
  }
  return(0)
} )

// replace when this becomes redundant
export interface CounterState {
  count: number;
  userCount: {
    count: number,
    loading: boolean,
    error?:string,
  }
}

// replace when this becomes redundant
const initialState: CounterState = {
  count: 0,
  userCount: {
      count: 0,
      loading: false,
      error: '',
  },
};
// add and remove reducers as and when they become redundant
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
  extraReducers(builder){
    // case scenarios for dealing with thunk action states(pending, rejected and fulfilled)
    builder.addCase(fetchUserCount.pending, (state) => {
      state.userCount.loading = true
    });
    builder.addCase(fetchUserCount.fulfilled, (state, action: PayloadAction<number>) => {
      state.userCount.loading = false
      state.userCount.count = action.payload

    });
     builder.addCase(fetchUserCount.rejected, (state, action) => {
      state.userCount.error = action?.error?.message || ''
    });
  },
});

export const { increment, decrement } = counterSlice.actions;
export const countSelector = ((state: CounterState) => state.count);
export const userCount = ((state: CounterState) => state.userCount)
export default counterSlice.reducer;
