import { createSlice } from "@reduxjs/toolkit";

export interface ICount {
    count: number
}

const initialState: ICount = {
    count: 0,
}

export const conterSlice = createSlice({
    name: 'incrementCounter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count++;
        }
    }
})

export const { increment } = conterSlice.actions;

export default conterSlice.reducer