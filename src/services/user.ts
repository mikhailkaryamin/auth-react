import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8000/api/test/';

const getAdminBoard = (): Promise<string> => {
  return axios.get(`${API_URL}admin`, {
    headers: authHeader(),
  });
};

const getModeratorBoard = (): Promise<string> => {
  return axios.get(`${API_URL}mod`, {
    headers: authHeader(),
  });
};

const getPublicContent = (): Promise<string> => {
  return axios.get(`${API_URL}all`);
};

const getUserBoard = (): Promise<string> => {
  return axios.get(`${API_URL}user`, {
    headers: authHeader(),
  });
};

export {
  getAdminBoard,
  getModeratorBoard,
  getPublicContent,
  getUserBoard,
};
