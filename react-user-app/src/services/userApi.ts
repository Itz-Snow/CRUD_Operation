import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Create a new user
export const createUser = (userData: any) => {
  return axios.post(`${API_BASE_URL}/api/users`, userData);
};

// Get all users
export const getAllUsers = () => {
  return axios.get(`${API_BASE_URL}/api/users`);
};

// Get one user by ID
export const getUserById = (id: number) => {  
  return axios.get(`${API_BASE_URL}/api/users/${id}`);
};

// Update user
export const updateUser = (id: number, userData: any) => {   
  return axios.put(`${API_BASE_URL}/api/users/${id}`, userData);
};

// Delete user
export const deleteUser = (id: number) => {   
  return axios.delete(`${API_BASE_URL}/api/users/${id}`);
};
