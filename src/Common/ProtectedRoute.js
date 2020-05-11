import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const ProtectedRoute = ({ children, ...rest }) => {
    const isAuthenticated = useSelector((state) => state.auth);
    return (
        <Route {...rest}>
            {
                isAuthenticated ?
                    children :
                    <Redirect to={'/login'} />
            }
        </Route>
    );
};