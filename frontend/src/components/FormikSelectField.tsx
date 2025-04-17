import { useCallback } from "react";

import { FormikProps } from "formik";

import { MenuItem, TextField, Typography } from "@mui/material";

type FormikSelectFieldProps<T extends string, F> = {
    label: string;
    fieldName: string;
    formik: FormikProps<F>;
    options: T[];
};

const FormikSelectField = <T extends string, F>({
    label,
    fieldName,
    formik,
    options,
}: FormikSelectFieldProps<T, F>) => {
    const { getFieldProps, getFieldMeta, setFieldValue } = formik;
    const fieldMeta = getFieldMeta(fieldName);
    const fieldProps = getFieldProps(fieldName);
    const error = fieldMeta.error !== undefined;

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setFieldValue(fieldName, e.target.value);
        },
        [fieldName, setFieldValue],
    );

    return (
        <>
            <Typography variant="subtitle2">{label}</Typography>
            <TextField
                size="small"
                variant="outlined"
                select
                fullWidth
                value={fieldProps.value || ""}
                onChange={handleChange}
                name={fieldProps.name}
                error={error}
                helperText={fieldMeta.error}
            >
                {options.map((o) => (
                    <MenuItem key={o} value={o}>
                        {o}
                    </MenuItem>
                ))}
            </TextField>
        </>
    );
};

export default FormikSelectField;
