import { useCallback, useMemo, useState } from "react";
import { Table, TableBody, TableHead } from "@mui/material";

import AddBoxIcon from "@mui/icons-material/AddBox";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import {
    TodoTaskCreateDialog,
    TodoTaskEditDialog,
    TodoTaskListTableHeader,
    TodoTaskListTableRow,
} from "@/components";
import { TodoTask } from "@/types/TodoTask";
import { TodoTaskActionProps } from "./TodoTaskListTableRow";
import { TableHeaderProps, TodoTaskListTableActionProps } from "./TodoTaskListTableHeader";
import { EditTodoTask } from "@/types/EditTodoTask";
import { CreateTodoTask } from "@/types/CreateTodoTask";
import { useDialog } from "@/hooks";
import { ApiError } from "@/types/ApiError";

type TodoTaskListTableProps = {
    todoTaskList: TodoTask[];
    handleAdd: (
        todoTask: CreateTodoTask,
    ) => Promise<TodoTask | ApiError | undefined>;
    handleEdit: (
        todoTask: EditTodoTask,
    ) => Promise<TodoTask | ApiError | undefined>;
    handleDelete: (todoTask: TodoTask) => Promise<ApiError | undefined>;
};

const TodoTaskListTable = ({
    todoTaskList,
    handleAdd,
    handleEdit,
    handleDelete,
}: TodoTaskListTableProps) => {
    const {
        isOpen: isOpenCreateDialog,
        openDialog: openCreateDialog,
        closeDialog: closeCreateDialog,
    } = useDialog(false);

    const {
        isOpen: isOpenEditDialog,
        openDialog: openEditDialog,
        closeDialog: closeEditDialog,
    } = useDialog(false);

    const [selectedTodoTask, setSelectedTodoTask] = useState<
        TodoTask | undefined
    >(undefined);

    const handleOpenEditDialogWith = useCallback(
        (todoTask: TodoTask) => {
            setSelectedTodoTask(todoTask);
            openEditDialog();
        },
        [setSelectedTodoTask, openEditDialog],
    );

    const headers: TableHeaderProps[] = useMemo(
        () => [
            { id: "id", label: "#" },
            { id: "name", label: "Name" },
            { id: "priority", label: "Priority" },
            { id: "status", label: "Status" },
        ],
        [],
    );

    const tableActions: TodoTaskListTableActionProps[] = useMemo(
        () => [
            {
                id: "create",
                icon: AddBoxIcon,
                color: "primary",
                onClick: openCreateDialog,
            },
        ],
        [openCreateDialog],
    );

    const todoTaskActions: TodoTaskActionProps[] = useMemo(
        () => [
            {
                id: "edit",
                icon: EditIcon,
                color: "primary",
                onClick: handleOpenEditDialogWith,
            },
            {
                id: "delete",
                icon: DeleteIcon,
                color: "error",
                onClick: handleDelete,
            },
        ],
        [handleOpenEditDialogWith, handleDelete],
    );

    return (
        <Table size="small">
            <TableHead>
                <TodoTaskListTableHeader
                    headers={headers}
                    tableActions={tableActions}
                />
            </TableHead>
            <TableBody>
                {todoTaskList.map((todoTask) => (
                    <TodoTaskListTableRow
                        key={todoTask.id}
                        todoTask={todoTask}
                        todoTaskActions={todoTaskActions}
                    />
                ))}
                <TodoTaskCreateDialog
                    open={isOpenCreateDialog}
                    onClose={closeCreateDialog}
                    onCreate={handleAdd}
                />
                <TodoTaskEditDialog
                    open={isOpenEditDialog}
                    todoTask={selectedTodoTask}
                    onClose={closeEditDialog}
                    onEdit={handleEdit}
                />
            </TableBody>
        </Table>
    );
};

export default TodoTaskListTable;
