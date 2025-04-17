import * as Yup from "yup";

export const todoTaskNameScheme = Yup.string().max(50).required();
