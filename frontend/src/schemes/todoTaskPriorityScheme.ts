import * as Yup from "yup";

export const todoTaskPriorityScheme = Yup.number()
    .integer()
    .min(1)
    .max(100)
    .required();
