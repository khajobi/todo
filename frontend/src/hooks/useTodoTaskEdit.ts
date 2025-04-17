import { useDispatch } from "react-redux";

import { editAction } from "@/store/slices/todoTaskSlice";
import { api, apiErrorHandler } from "@/utils";
import { EditTodoTask } from "@/types/EditTodoTask";
import { TodoTask } from "@/types/TodoTask";
import { ApiError } from "@/types/ApiError";

const useTodoTaskEdit = () => {
    const dispatch = useDispatch();

    const editTodoTask = async ({
        id,
        newName,
        newPriority,
        newStatus,
    }: EditTodoTask): Promise<TodoTask | ApiError | undefined> => {
        try {
            const response = await api.put<TodoTask>(`/TodoTask/${id}`, {
                newName,
                newPriority,
                newStatus,
            });

            const editedTodoTask = response.data;
            dispatch(editAction(editedTodoTask));

            return editedTodoTask;
        } catch (error) {
            return apiErrorHandler(error);
        }
    };

    return {
        editTodoTask,
    };
};

export default useTodoTaskEdit;
