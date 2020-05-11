import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './Header.css';
import { logoutRequest } from '../Auth/actions';
import { useDispatch, useSelector } from 'react-redux';

export const Header = () => {

    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector((store) => store.auth);
    const history = useHistory();

    const handleLogout = () => {
        dispatch(logoutRequest());
        history.push('/');
    };

    return (
        <ul>
            <li>
                <NavLink to={"/"}>Home</NavLink>
            </li>
            {
                isAuthenticated ?
                    (
                        <>
                            <li>
                                <NavLink to={"/profile"}>Profile</NavLink>
                            </li>
                            <li>
                                <button onClick={handleLogout}>Log out</button>
                            </li>
                        </>
                    ) :
                    (
                        <li>
                            <NavLink to={"/login"}>Login</NavLink>
                        </li>
                    )

            }
        </ul>
    );
};