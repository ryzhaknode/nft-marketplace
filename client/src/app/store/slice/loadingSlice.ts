import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
    loading: true,
};

export const userIdSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLoadingFalse: (state) => {
            state.loading = false;
        },
        setLoadingTrue: (state) => {
            state.loading = true;
        },
    },
});

export const selectLoading = (state: RootState) => state.loading.loading;

export const { setLoadingFalse, setLoadingTrue } = userIdSlice.actions;
export default userIdSlice.reducer;
