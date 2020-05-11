import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS } from './actions';

const initialState = {
    isAuthenticated: false,
    username: null
};

export const authReducer = (state = initialState, action) => {
  switch(action.type){
      case LOGIN_SUCCESS:
          return {
              ...state,
              isAuthenticated: true,
              username: action.payload.username
          };
      case LOGIN_REQUEST:
          return {
              ...state,
              isAuthenticated: false,
              username: action.payload.username
          };
      case LOGIN_FAILURE:
      case LOGOUT_REQUEST:
      case LOGOUT_SUCCESS:
      default:
          return {
              ...initialState
          };
  }
};