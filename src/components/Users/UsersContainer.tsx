import React from 'react';
import Users from "./Users";
import {UserType} from "../../store/usersReducer";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {RequestStatusType} from "../../store/appReducer";
import Loader from "../../common/Loader/Loader";


function UsersContainer() {

    const users = useSelector<AppRootStateType, UserType[]>(state => state.users)
    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status)

    if (status === 'loading') return <Loader/>

    return (
        <Users users={users}/>
    );
}

export default UsersContainer;