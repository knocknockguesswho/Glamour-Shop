import axios from 'axios';
import {config} from '../../config/baseUrl';

export const Login = (data) => {
  return {
    type: 'LOGIN',
    payload: axios({
      method: 'POST',
      url: `${config.url}/api/auth/login`,
      data: {
        email: data.email,
        password: data.password,
      },
    }),
  };
};

export const Register = (data) => {
  return {
    type: 'REGISTER',
    payload: axios({
      method: 'POST',
      url: `${config.url}/api/auth/register`,
      data: {
        email: data.email,
        password: data.password,
        name: data.name,
      },
    }),
  };
};

export const Forgot = (data) => {
  return {
    type: 'FORGOT',
    payload: axios({
      method: 'POST',
      url: `${config.url}/api/auth/forgot-password`,
      data: {
        email: data.email,
      },
    }),
  };
};

export const ChangePassword = (data) => {
  return {
    type: 'CHANGE',
    payload: axios({
      method: 'POST',
      url: `${config.url}/api/auth/change-password`,
      data: {
        email: data.email,
        password: data.password,
      },
    }),
  };
};

export const Verification = (data) => {
  return {
    type: 'VERIFY',
    payload: axios({
      method: 'POST',
      url: `${config.url}/api/auth/verify`,
      data: {
        email: data.email,
        code: data.code,
      },
    }),
  };
};

export const editProfile = (token, data) => {
  return {
    type: 'EDIT',
    payload: axios({
      method: 'PUT',
      url: 'http://10.227.60.141:3000/api/auth/profile',
      headers: {
        Authorization: token,
      },
      data: data,
    }),
  };
};

export const Logout = () => {
  return {
    type: 'LOGOUT',
  };
};
