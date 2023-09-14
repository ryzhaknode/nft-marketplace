import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
    authenticated: false,
};

export const authenticatedSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        authenticationTrue: (state) => {
            state.authenticated = true;
        },
        authenticationFalse: (state) => {
            state.authenticated = false;
        },
    },
});

export const selectAuthenticated = (state: RootState) => state.authentication.authenticated;

export const { authenticationTrue, authenticationFalse } = authenticatedSlice.actions;

export default authenticatedSlice.reducer;
