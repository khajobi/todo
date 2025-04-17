import { useDispatch } from "react-redux";

import { addAction } from "@/store/slices/todoTaskSlice";
import { api, apiErrorHandler } from "@/utils";
import { CreateTodoTask } from "@/types/CreateTodoTask";
import { TodoTask } from "@/types/TodoTask";
import { ApiError } from "@/types/ApiError";

const useTodoTaskEdit = () => {
    const dispatch = useDispatch();

    const createTodoTask = async ({
        name,
        priority,
    }: CreateTodoTask): Promise<TodoTask | ApiError | undefined> => {
        try {
            const response = await api.post(`/TodoTask`, {
                name: name,
                priority: priority,
            });

            const editedTodoTask = response.data;
            dispatch(addAction(editedTodoTask));

            return editedTodoTask;
        } catch (error) {
            return apiErrorHandler(error);
        }
    };

    return {
        createTodoTask,
    };
};

export default useTodoTaskEdit;
