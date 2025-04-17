import { TableCell, TableRow } from "@mui/material";

import { SvgIconComponent } from "@mui/icons-material";
import { SvgIconProps } from "@mui/material/SvgIcon";

import { ActionIconButton } from "@/components";

export type TodoTaskListTableActionProps = {
    id: React.Key;
    icon: SvgIconComponent;
    color: SvgIconProps["color"];
    onClick: () => void;
};

type TableHeaderProps = {
    id: React.Key;
    label: string;
};

type TodoTaskListTableHeaderProps = {
    headers: TableHeaderProps[];
    tableActions: TodoTaskListTableActionProps[];
};

const TodoTaskListTableHeader = ({
    headers,
    tableActions,
}: TodoTaskListTableHeaderProps) => {
    return (
        <TableRow>
            {headers.map((header) => (
                <TableCell key={header.id}>
                    <b>{header.label}</b>
                </TableCell>
            ))}
            <TableCell align="right">
                {tableActions.map((tableAction) => (
                    <ActionIconButton
                        key={tableAction.id}
                        iconComponent={tableAction.icon}
                        color={tableAction.color}
                        onClick={tableAction.onClick}
                    />
                ))}
            </TableCell>
        </TableRow>
    );
};

export default TodoTaskListTableHeader;
