import { combineReducers, createStore, applyMiddleware } from 'redux';
import { authReducer } from '../Auth/reducer.js';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    auth: authReducer
})

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);