import { ValidationError } from "@/types/ApiError";
import { FormikProps } from "formik";

const convertToCamelCase = (str: string): string => {
    return str.charAt(0).toLowerCase() + str.slice(1);
};

export const setValidationErrors = <T>(
    formik: FormikProps<T>,
    validationErrors: ValidationError[] | undefined,
) => {
    for (const validationError of validationErrors || []) {
        formik.setFieldError(
            convertToCamelCase(validationError.propertyName),
            validationError.errorMessage,
        );
    }
};
