import axios from 'axios';

const API_URL = 'http://localhost:8000/api/auth/';

const getCurrentUser = (): string => {
  return JSON.parse(localStorage.getItem('user') || ``);
};

const login = async (username: string, password: string): Promise<undefined> => {

  const res = await axios
    .post(`${API_URL}signin`, {
      username,
      password
    });
  // eslint-disable-next-line no-console
  console.log(res);
  if (res.data.accessToken) {
    localStorage.setItem('user', JSON.stringify(res.data));
  }
  return;
};

const logout = (): void => {
  localStorage.removeItem('user');
};

const register = (username: string, email: string, password: string): Promise<string> => {
  return axios.post(`${API_URL}signup`, {
    username,
    email,
    password
  });
};

export {
  getCurrentUser,
  login,
  logout,
  register,
};
