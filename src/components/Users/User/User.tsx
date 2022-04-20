import React from 'react';
import styles from './User.module.scss'
import {UserType} from "../../../store/usersReducer";
import {useNavigate} from "react-router-dom";

type UserPropsType = {
    user: UserType
}

function User({user}: UserPropsType) {

    const navigate = useNavigate()

    return (
        <div className={styles.user}>
            <div>ФИО<span>{`${user.name} ${user.username}`}</span></div>
            <div>город<span>{user.address.city}</span></div>
            <div>компания<span>{user.company.name}</span></div>
            <a className={styles.openProfile} onClick={() => navigate(`${user.id}`, {state: user})}>Подробнее</a>
        </div>
    );
}

export default User;