import { Status } from "@/types/Status";
import * as Yup from "yup";

export const todoTaskStatusScheme = Yup.mixed<Status>()
    .oneOf(Object.values(Status))
    .required();
