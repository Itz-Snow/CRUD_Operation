import axios from 'axios';
const API_URL = 'http://localhost:3000/api/users';

export const createUser = (userData : any) => {
    return axios.post(API_URL, userData)
}
export const getAllUsers = () => {
    return axios.get(API_URL);
}
export const getUserById = (id: string) => {
    return axios.get(`${API_URL}/${id}`);
}
export const updateUser = (id: string, userData: any) => {
    return axios.patch(`${API_URL}/${id}`, userData);
}

export const deleteUser = (id: string) => {
    return axios.delete(`${API_URL}/${id}`);
}