import { configureStore } from "@reduxjs/toolkit";
import authenticatedReducer from "./slice/authenticatedSlice";

const store = configureStore({
  reducer: {
    authentication: authenticatedReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {counters: CountersState}
export type AppDispatch = typeof store.dispatch;
