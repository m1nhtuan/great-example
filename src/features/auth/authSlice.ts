import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, User } from 'types';

/**
 * Initial state for the authentication slice
 * @property {User | null} user - Currently logged in user information
 * @property {boolean} isAuthenticated - Whether a user is currently authenticated
 * @property {boolean} loading - Loading state for async operations
 * @property {string | null} error - Error message if authentication fails
 */
const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

/**
 * Redux slice for handling authentication state
 * Manages user login, logout, and authentication status
 */
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    /**
     * Sets loading state when login process starts
     * Clears any previous errors
     */
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },

    /**
     * Updates state when login is successful
     * @param {User} action.payload - User information to store
     */
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
    },

    /**
     * Updates state when login fails
     * @param {string} action.payload - Error message
     */
    loginFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    /**
     * Resets auth state when user logs out
     * Clears all user data and authentication status
     */
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer; 