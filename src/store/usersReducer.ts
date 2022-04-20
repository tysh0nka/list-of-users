import {createSlice, Dispatch, PayloadAction} from "@reduxjs/toolkit";
import {usersAPI} from "../api/users-api";
import {setAppStatusAC} from "./appReducer";

export type UserType = {
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": {
        "street": string,
        "suite": string,
        "city": string,
        "zipcode": string,
        "geo": {
            "lat": string,
            "lng": string
        }
    },
    "phone": string,
    "website": string,
    "company": {
        "name": string,
        "catchPhrase": string,
        "bs": string
    }
}


const initialState: UserType[] = []

const usersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        getUsers(state, action: PayloadAction<UserType[]>) {
            return state = action.payload
        },
        sortCity(state) {
            return state.sort((a, b) => {
                if (a.address.city < b.address.city) return -1;
                if (a.address.city < b.address.city) return 1;
                return 0
            })
        },
        sortName(state) {
            return state.sort((a, b) => {
                if (a.name < b.name) return -1;
                if (a.name < b.name) return 1;
                return 0
            })
        }
    }
})

export const usersReducer = usersSlice.reducer
export const {getUsers, sortCity, sortName} = usersSlice.actions


// thunks
export const fetchUsers = () => {
    return (dispatch: Dispatch) => {
        dispatch(setAppStatusAC({status: 'loading'}))
        usersAPI.getUsers()
            .then((data: UserType[]) => {
                dispatch(getUsers(data))
                dispatch(setAppStatusAC({status: 'succeeded'}))
            })
    }
}