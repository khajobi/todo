import { configureStore } from "@reduxjs/toolkit";
import { todoTaskSlice } from "./slices";

export const store = configureStore({
    reducer: {
        todoTask: todoTaskSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
