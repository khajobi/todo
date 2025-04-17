import { RootState } from "@/store";

export const selectTodoTaskList = (state: RootState) =>
    state.todoTask.todoTaskList;
