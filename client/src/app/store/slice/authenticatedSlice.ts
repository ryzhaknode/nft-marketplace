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
            // eslint-disable-next-line no-param-reassign
            state.authenticated = true;
        },
        authenticationFalse: (state) => {
            // eslint-disable-next-line no-param-reassign
            state.authenticated = false;
        },
    },
});

export const selectAuthenticated = (state: RootState) => state.authentication.authenticated;

export const { authenticationTrue, authenticationFalse } = authenticatedSlice.actions;

export default authenticatedSlice.reducer;
