import { useDispatch } from "react-redux";

import { removeAction } from "@/store/slices/todoTaskSlice";
import { api, apiErrorHandler } from "@/utils";
import { TodoTask } from "@/types/TodoTask";
import { ApiError } from "@/types/ApiError";

const useTodoTaskDelete = () => {
    const dispatch = useDispatch();

    const deleteTodoTask = async (
        todoTask: TodoTask,
    ): Promise<ApiError | undefined> => {
        try {
            await api.delete(`/TodoTask/${todoTask.id}`);
            dispatch(removeAction(todoTask));
        } catch (error) {
            return apiErrorHandler(error);
        }
    };

    return {
        deleteTodoTask,
    };
};

export default useTodoTaskDelete;
