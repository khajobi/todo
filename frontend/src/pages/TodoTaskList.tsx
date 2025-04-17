import {
    useTodoTaskCreate,
    useTodoTaskDelete,
    useTodoTaskEdit,
    useTodoTaskList,
} from "@/hooks";
import { TodoTaskListTable } from "@/components";
import { TodoTask } from "@/types/TodoTask";
import { CreateTodoTask } from "@/types/CreateTodoTask";
import { EditTodoTask } from "@/types/EditTodoTask";
import { ApiError } from "@/types/ApiError";

const TodoTaskList = () => {
    const { todoTaskList, loading } = useTodoTaskList();
    const { createTodoTask } = useTodoTaskCreate();
    const { deleteTodoTask } = useTodoTaskDelete();
    const { editTodoTask } = useTodoTaskEdit();

    const handleAdd = async (
        todoTask: CreateTodoTask,
    ): Promise<TodoTask | ApiError | undefined> => {
        return await createTodoTask(todoTask);
    };

    const handleEdit = async (
        todoTask: EditTodoTask,
    ): Promise<TodoTask | ApiError | undefined> => {
        return await editTodoTask(todoTask);
    };

    const handleDelete = async (
        todoTask: TodoTask,
    ): Promise<ApiError | undefined> => {
        return await deleteTodoTask(todoTask);
    };

    return loading ? (
        <h1>Loading...</h1>
    ) : (
        <TodoTaskListTable
            todoTaskList={todoTaskList}
            handleAdd={handleAdd}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    );
};

export default TodoTaskList;
