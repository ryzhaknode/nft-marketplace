import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";

interface userId {
    userId: number | null
}

const initialState: userId = {
    userId: null,
};

export const userIdSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserId: (state, action) => {
            state.userId = action.payload;
        },
    },
});

export const selectUser = (state: RootState) => state.user.userId;

export const {setUserId} = userIdSlice.actions;
export default userIdSlice.reducer;
