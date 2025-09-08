import axios from 'axios';

// Use deployed backend as base
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ;

export const createUser = (userData: any) => {
  return axios.post(API_BASE_URL, userData);
};

export const getAllUsers = () => {
  return axios.get(API_BASE_URL);
};

export const getUserById = (id: string) => {
  return axios.get(`${API_BASE_URL}/${id}`);
};

export const updateUser = (id: string, userData: any) => {
  return axios.patch(`${API_BASE_URL}/${id}`, userData);
};

export const deleteUser = (id: string) => {
  return axios.delete(`${API_BASE_URL}/${id}`);
};
