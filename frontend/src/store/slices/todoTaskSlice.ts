import { TodoTask } from "@/types/TodoTask";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateProps = {
    todoTaskList: TodoTask[];
};

const initialState: initialStateProps = {
    todoTaskList: [],
};

export const todoTaskSlice = createSlice({
    name: "todoTask",
    initialState,
    reducers: {
        setAction: (state, action: PayloadAction<TodoTask[]>) => {
            state.todoTaskList = [...action.payload];
        },
        addAction: (state, action: PayloadAction<TodoTask>) => {
            state.todoTaskList = [...state.todoTaskList, action.payload];
        },
        editAction: (state, action: PayloadAction<TodoTask>) => {
            state.todoTaskList = state.todoTaskList.map((t) =>
                t.id === action.payload.id ? action.payload : t,
            );
        },
        removeAction: (state, action: PayloadAction<TodoTask>) => {
            state.todoTaskList = state.todoTaskList.filter(
                (t) => t.id !== action.payload.id,
            );
        },
    },
});

export const { setAction, addAction, editAction, removeAction } =
    todoTaskSlice.actions;

export default todoTaskSlice.reducer;
