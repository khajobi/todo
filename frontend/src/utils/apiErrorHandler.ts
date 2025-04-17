import axios, { AxiosError } from "axios";
import { ApiError } from "@/types/ApiError";

const apiErrorHandler = (error: Error): ApiError | undefined => {
    if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<ApiError>;

        return new ApiError(
            axiosError.response?.status,
            axiosError.response?.data.message,
            axiosError.response?.data.reason,
            axiosError.response?.data.operation,
            axiosError.response?.data.validationErrors,
        );
    }
};

export default apiErrorHandler;
