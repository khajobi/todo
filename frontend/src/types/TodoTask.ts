import { Status } from "./Status";

export type TodoTask = {
    id: number;
    name: string;
    priority: number;
    status: Status;
};
