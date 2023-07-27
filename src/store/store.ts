import { configureStore } from "@reduxjs/toolkit";
import sortReducer from "./sortSlice";
import authenticatedReducer from "./authenticatedSlice";

const store = configureStore({
  reducer: {
    sort: sortReducer,
    authentication: authenticatedReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {counters: CountersState}
export type AppDispatch = typeof store.dispatch;
