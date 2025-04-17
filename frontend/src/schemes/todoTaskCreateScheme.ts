import * as Yup from "yup";

import { todoTaskNameScheme } from "./todoTaskNameScheme";
import { todoTaskPriorityScheme } from "./todoTaskPriorityScheme";

const todoTaskCreateScheme = Yup.object().shape({
    name: todoTaskNameScheme,
    priority: todoTaskPriorityScheme,
});

export default todoTaskCreateScheme;
