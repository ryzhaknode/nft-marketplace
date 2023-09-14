import { configureStore } from '@reduxjs/toolkit';
import authenticatedReducer from './slice/authenticatedSlice';
import userIdReducer from './slice/userIdSlice';
import loadingReducer from './slice/loadingSlice';

const store = configureStore({
    reducer: {
        authentication: authenticatedReducer,
        user: userIdReducer,
        loading: loadingReducer,
    },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {counters: CountersState}
export type AppDispatch = typeof store.dispatch;
