import React from 'react';
import styles from './Sort.module.scss'
import {useDispatch} from "react-redux";
import {sortCity, sortName} from "../../store/usersReducer";

function Sort() {

    const dispatch = useDispatch()

    return (
        <div className={styles.sortBlock}>
            <div className={styles.title}>Сортировка</div>
            <button onClick={()=> dispatch(sortCity())}>по городу</button>
            <button onClick={()=> dispatch(sortName())}>по имени</button>
        </div>
    );
}

export default Sort;