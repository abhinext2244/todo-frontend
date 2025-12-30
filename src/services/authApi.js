// services/authService.js
import {apiConnector} from "./apiConnector";
import {authendpoint}  from "./api";

const { REGISTER_API, LOGIN_API, GETME_API, LOGOUT_API} = authendpoint;

export const registerUser = (name, email, password) => {
  return apiConnector("POST", REGISTER_API, {
    name,
    email,
    password,
  });
};

export const loginUser = (email, password) => {
  return apiConnector("POST", LOGIN_API, {
    email,
    password,
  });
};

export const getMe = () => {
  return apiConnector("GET", GETME_API);
};

export const logoutUser = () => {
  return apiConnector("POST",LOGOUT_API);
};