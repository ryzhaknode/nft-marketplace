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
            // eslint-disable-next-line no-param-reassign
            state.loading = false;
        },
        setLoadingTrue: (state) => {
            // eslint-disable-next-line no-param-reassign
            state.loading = true;
        },
    },
});

export const selectLoading = (state: RootState) => state.loading.loading;

export const { setLoadingFalse, setLoadingTrue } = userIdSlice.actions;
export default userIdSlice.reducer;
