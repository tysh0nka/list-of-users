import React, {useEffect} from 'react';
import './App.scss';
import {Route, Routes} from 'react-router-dom';
import Sort from './components/Sort/Sort';
import UsersContainer from "./components/Users/UsersContainer";
import UserProfileContainer from "./components/UserProfile/UserProfileContainer";
import {useDispatch} from "react-redux";
import {fetchUsers} from "./store/usersReducer";

function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchUsers())
    }, [])

    return (
        <div className="App">
            <Sort/>
            <Routes>
                <Route path='/' element={<UsersContainer/>}/>
                <Route path=':id' element={<UserProfileContainer/>}/>
            </Routes>
        </div>
    );
}

export default App;
