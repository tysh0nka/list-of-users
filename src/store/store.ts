import {combineReducers, configureStore} from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk'
import {usersReducer} from "./usersReducer";
import {appReducer} from "./appReducer";

const rootReducer = combineReducers({
    users: usersReducer,
    app: appReducer,
})

export type AppRootStateType = ReturnType<typeof rootReducer>

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})


