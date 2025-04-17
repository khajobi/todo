import { Status } from "./Status";

export type EditTodoTask = {
    id: number;
    newName: string;
    newPriority: number;
    newStatus: Status;
};
