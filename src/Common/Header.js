import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export const Header = () => {
    return (
        <ul>
            <li>
                <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
                <NavLink to={"/login"}>Login</NavLink>
            </li>
            <li>
                <NavLink to={"/profile"}>Profile</NavLink>
            </li>
        </ul>
    );
};