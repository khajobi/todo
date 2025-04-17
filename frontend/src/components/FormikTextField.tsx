import { FormikProps } from "formik";

import { TextField, Typography } from "@mui/material";

type FormikTextFieldProps<F> = {
    label: string;
    fieldName: string;
    type?: React.HTMLInputTypeAttribute;
    formik: FormikProps<F>;
};

const FormikTextField = <F,>({
    label,
    fieldName,
    type,
    formik,
}: FormikTextFieldProps<F>) => {
    const { getFieldProps, getFieldMeta } = formik;
    const fieldMeta = getFieldMeta(fieldName);
    const fieldProps = getFieldProps(fieldName);
    const error = fieldMeta.error !== undefined;

    return (
        <>
            <Typography variant="subtitle2">{label}</Typography>
            <TextField
                size="small"
                variant="outlined"
                type={type}
                fullWidth
                value={fieldProps.value || ""}
                onChange={fieldProps.onChange}
                name={fieldProps.name}
                error={error}
                helperText={fieldMeta.error}
            />
        </>
    );
};

export default FormikTextField;
