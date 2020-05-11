// src/Auth/Login.js
import React, { useState } from 'react';
import { loginAsync } from './actions';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector((state) => state.auth);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginAsync(username, password));
    };

    if( isAuthenticated ) {
        return <Redirect to={'/profile'} />;
    }

    return (
        <>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type='password'
                    placeholder='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit'>Log in</button>
            </form>
        </>
    );
};