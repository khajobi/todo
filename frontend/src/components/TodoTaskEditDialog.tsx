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

import { Status } from "@/types/Status";
import { EditTodoTask } from "@/types/EditTodoTask";
import { TodoTask } from "@/types/TodoTask";
import { ApiError } from "@/types/ApiError";
import { todoTaskEditScheme } from "@/schemes";
import FormikTextField from "./FormikTextField";
import FormikSelectField from "./FormikSelectField";
import { setValidationErrors } from "@/utils/formikHelpers";

type TodoTaskEditDialogProps = {
    open: boolean;
    todoTask: TodoTask | undefined;
    onClose: () => void;
    onEdit: (
        todoTask: EditTodoTask,
    ) => Promise<TodoTask | ApiError | undefined>;
};

const TodoTaskEditDialog = ({
    open,
    todoTask,
    onClose,
    onEdit,
}: TodoTaskEditDialogProps) => {
    const formik = useFormik({
        enableReinitialize: true,
        validationSchema: todoTaskEditScheme,
        initialValues: {
            id: todoTask?.id || 0,
            newName: todoTask?.name || "",
            newPriority: todoTask?.priority || 1,
            newStatus: todoTask?.status || Status.NotStarted,
        },
        onSubmit: async () => {
            const response = await onEdit({ ...formik.values });
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
            <DialogTitle>Edit Todo Task</DialogTitle>
            <DialogContent>
                <FormikProvider value={formik}>
                    <Form autoComplete="off" noValidate>
                        <Grid container spacing={3}>
                            <Grid size={12}>
                                <FormikTextField
                                    label="Name"
                                    fieldName="newName"
                                    formik={formik}
                                />
                            </Grid>
                            <Grid size={12}>
                                <FormikTextField
                                    label="Priority"
                                    fieldName="newPriority"
                                    formik={formik}
                                />
                            </Grid>
                            <Grid size={12}>
                                <FormikSelectField
                                    label="Status"
                                    fieldName="newStatus"
                                    formik={formik}
                                    options={[
                                        Status.NotStarted,
                                        Status.InProgress,
                                        Status.Completed,
                                    ]}
                                />
                            </Grid>
                        </Grid>
                    </Form>
                </FormikProvider>
            </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={formik.submitForm}>
                    Submit
                </Button>
                <Button color="secondary" onClick={handleClose}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default TodoTaskEditDialog;
