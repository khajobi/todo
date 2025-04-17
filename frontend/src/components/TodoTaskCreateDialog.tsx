import { useCallback } from "react";
import { Form, FormikProvider, useFormik } from "formik";

import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Grid,
} from "@mui/material";
import { CreateTodoTask } from "@/types/CreateTodoTask";
import { TodoTask } from "@/types/TodoTask";
import { ApiError } from "@/types/ApiError";
import { todoTaskCreateScheme } from "@/schemes";
import FormikTextField from "./FormikTextField";
import { setValidationErrors } from "@/utils/formikHelpers";

type TodoTaskCreateDialogProps = {
    open: boolean;
    onClose: () => void;
    onCreate: (
        todoTask: CreateTodoTask,
    ) => Promise<TodoTask | ApiError | undefined>;
};

const TodoTaskCreateDialog = ({
    open,
    onClose,
    onCreate,
}: TodoTaskCreateDialogProps) => {
    const formik = useFormik({
        enableReinitialize: true,
        validationSchema: todoTaskCreateScheme,
        initialValues: {
            name: "",
            priority: 1,
        },
        onSubmit: async () => {
            const response = await onCreate({ ...formik.values });
            if (response instanceof ApiError) {
                setValidationErrors(formik, response.validationErrors);
            } else {
                handleClose();
            }
        },
    });

    const handleClose = useCallback(() => {
        formik.resetForm();
        onClose();
    }, [formik, onClose]);

    return (
        <Dialog open={open}>
            <DialogTitle>Create New Todo Task</DialogTitle>
            <DialogContent>
                <FormikProvider value={formik}>
                    <Form autoComplete="off" noValidate>
                        <Grid container spacing={3}>
                            <Grid size={12}>
                                <FormikTextField
                                    label="Name"
                                    fieldName="name"
                                    formik={formik}
                                />
                            </Grid>
                            <Grid size={12}>
                                <FormikTextField
                                    label="Priority"
                                    fieldName="priority"
                                    formik={formik}
                                />
                            </Grid>
                        </Grid>
                    </Form>
                </FormikProvider>
            </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={formik.submitForm}>
                    Create
                </Button>
                <Button color="secondary" onClick={handleClose}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default TodoTaskCreateDialog;
