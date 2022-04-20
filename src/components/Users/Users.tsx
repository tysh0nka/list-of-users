import React from 'react';
import styles from './Users.module.scss'
import User from "./User/User";
import {UserType} from "../../store/usersReducer";


type UsersPropsType = {
    users: UserType[]
}

function Users({users}: UsersPropsType) {

    return (
        <div className={styles.users}>
            <h3 className={styles.title}>Список пользоватлей</h3>
            {users.map(m => <User key={m.id} user={m}/>)}
        </div>
    );
}

export default Users;