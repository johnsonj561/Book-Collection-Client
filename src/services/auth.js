import _ from 'lodash';
import httpService from './http';

const TOKEN_STORAGE_KEY = 'my-books-token';

const parseToken = (token) => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace('.', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
};


/**
 * setToken stores jwt token in browser local storage
 * @param {string} token
 */
export const setToken = (token) => {
  if (token) {
    return window.localStorage.setItem(TOKEN_STORAGE_KEY, token);
  }
  window.localStorage.removeItem(TOKEN_STORAGE_KEY);
};


/**
 * getToken
 * @return {string} jwt token from browser local storage
 */
export const getToken = () => window.localStorage.getItem(TOKEN_STORAGE_KEY);


/**
 * isAuthenticated
 * @return {boolean}
 */
export const isAuthenticated = () => !!window.localStorage.getItem(TOKEN_STORAGE_KEY);


/**
 * loginUser
 * @param {string} username
 * @param {string} password
 * @return {AsyyncFunction} that resolves to parsed JWT token
 */
export const loginUser = async (username, password) => {
  const data = { username, password };
  const resp = await httpService.post('http://localhost:3000/auth', data);
  const token = _.get(resp, 'data.token');
  if (!token) {
    return undefined;
  }
  const parsedToken = parseToken(token);
  setToken(token);
  return parsedToken;
};

export const logoutUser = () => setToken();
