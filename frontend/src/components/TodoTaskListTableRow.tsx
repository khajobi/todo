import { TableCell, TableRow } from "@mui/material";

import { SvgIconComponent } from "@mui/icons-material";
import { SvgIconProps } from "@mui/material/SvgIcon";

import { ActionIconButton } from "@/components";

import { TodoTask } from "@/types/TodoTask";

export type TodoTaskActionProps = {
    id: React.Key;
    icon: SvgIconComponent;
    color: SvgIconProps["color"];
    onClick: (todoTask: TodoTask) => void;
};

type TodoTaskListTableRowProps = {
    todoTask: TodoTask;
    todoTaskActions: TodoTaskActionProps[];
};

const TodoTaskListTableRow = ({
    todoTask,
    todoTaskActions,
}: TodoTaskListTableRowProps) => {
    return (
        <TableRow hover>
            <TableCell>{todoTask.id}</TableCell>
            <TableCell>{todoTask.name}</TableCell>
            <TableCell>{todoTask.priority}</TableCell>
            <TableCell>{todoTask.status}</TableCell>
            <TableCell align="right">
                {todoTaskActions.map((action) => (
                    <ActionIconButton
                        key={`${todoTask.id}_${action.id}`}
                        iconComponent={action.icon}
                        color={action.color}
                        onClick={() => {
                            action.onClick(todoTask);
                        }}
                    />
                ))}
            </TableCell>
        </TableRow>
    );
};

export default TodoTaskListTableRow;
