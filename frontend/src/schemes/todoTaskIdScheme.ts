import * as Yup from "yup";

export const todoTaskIdScheme = Yup.number().integer().min(1).required();
