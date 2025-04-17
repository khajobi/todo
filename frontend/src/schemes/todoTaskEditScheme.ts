import * as Yup from "yup";

import { todoTaskIdScheme } from "./todoTaskIdScheme";
import { todoTaskNameScheme } from "./todoTaskNameScheme";
import { todoTaskPriorityScheme } from "./todoTaskPriorityScheme";
import { todoTaskStatusScheme } from "./todoTaskStatusScheme";

const todoTaskEditScheme = Yup.object().shape({
    id: todoTaskIdScheme,
    newName: todoTaskNameScheme,
    newPriority: todoTaskPriorityScheme,
    newStatus: todoTaskStatusScheme,
});

export default todoTaskEditScheme;
