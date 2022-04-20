import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

type InitialStateType = {
    status: RequestStatusType
}

const initialState: InitialStateType = {
    status: 'idle'
}


const appSlice = createSlice({
    name: 'app',
    initialState: initialState,
    reducers: {
        setAppStatusAC(state, actions: PayloadAction<{ status: RequestStatusType }>) {
            state.status = actions.payload.status
        },
    }
})

export const appReducer = appSlice.reducer
export const {setAppStatusAC} = appSlice.actions