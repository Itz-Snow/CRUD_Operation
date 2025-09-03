import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import * as userApi from '../../services/userApi.ts'
import type { User } from '../../types/UserTypes.ts'

// Async Thunks for API Calls 
export const createUser = 
    createAsyncThunk('user/create', async (userData: any) =>{
        const response = await userApi.createUser(userData)
        return response.data
    }) 

export const fetchUsers =
    createAsyncThunk('user/fetchAll', async () => {
        const response = await userApi.getAllUsers()
        return response.data 
    })

export const fetchUsersById = 
    createAsyncThunk('user/fetchById', async (id: string ) => {
        const response = await userApi.getUserById(id)
        return response.data 
    })

export const updateUser = 
    createAsyncThunk('user/update', async ({id, userData}: {id: string, userData: any}) => {
        const response = await userApi.updateUser(id, userData)
        return response.data
    })

export const deleteUser =
    createAsyncThunk('user/delete', async (id: string) => {
        await userApi.deleteUser(id)
        return id
    })

interface UserState {
    users: any[]; 
    currentUser: any | null;
    loading: boolean;
    error: string | null;
    formData: Record<string, any>; // holds stepwise form data before final submit
    currentStep: number; // tracks the current step in the multi-step form
}

// Initial State
const initialState: UserState = {
    users: [],
    currentUser: null,
    loading: false,
    error: null,
    currentStep: 1,
    formData: {},
};

// User Slice definition
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearCurrentUser: (state) => {
            state.currentUser = null;
        },

        setCurrentStep: (state, action: PayloadAction<number>) => {
            state.currentStep = action.payload;
        },

        updateFormData: (state, action: PayloadAction<Record<string, any>>) => {
            state.formData = {
                ...state.formData,
                ...action.payload,
            }
        },

        setCurrentUser(state, action: PayloadAction<User | null>) {
            state.currentUser = action.payload;
        },

        clearFormData: (state) => {
            state.formData = {};
            state.currentStep = 1;
        },

        resetForm: (state) => {
            state.formData = {};
            state.currentStep = 1;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            // Create User
            .addCase(createUser.pending, (state) => {
            state.loading = true;
            state.error = null;
            })
            .addCase(createUser.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.users.push(action.payload);
            })
            .addCase(createUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message ?? 'Failed to create user';
            })

            // Fetch All Users
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<any[]>) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Failed to fetch users';
            })

            // Fetch User by ID
            .addCase(fetchUsersById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })  
            .addCase(fetchUsersById.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.currentUser = action.payload;
            })
            .addCase(fetchUsersById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Failed to fetch user by ID';
            })

            // Update User
            .addCase(updateUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })  
            .addCase(updateUser.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                const index = state.users.findIndex(user => user.id === action.payload.id);
                if (index !== -1) {
                    state.users[index] = action.payload;
                }
                if (state.currentUser && state.currentUser.id === action.payload.id) {
                    state.currentUser = action.payload;
                }
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Failed to update user';
            })

            // Delete User
            .addCase(deleteUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteUser.fulfilled, (state, action: PayloadAction<string>) =>{
                state.loading = false;
                state.users = state.users.filter(user => user.id !== action.payload);
                if (state.currentUser && state.currentUser.id === action.payload) {
                    state.currentUser = null;
                }
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Failed to delete user';
            })

    }
})

export const { clearCurrentUser, setCurrentStep, updateFormData,setCurrentUser, resetForm } = userSlice.actions
export default userSlice.reducer
