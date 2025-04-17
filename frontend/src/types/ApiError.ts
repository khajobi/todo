export type ValidationError = {
    propertyName: string;
    errorMessage: string;
    attemptedValue?: unknown;
};

export class ApiError {
    statusCode?: number;
    message?: string;
    reason?: string;
    operation?: string;
    validationErrors?: ValidationError[];

    constructor(
        statusCode?: number,
        message?: string,
        reason?: string,
        operation?: string,
        validationErrors?: ValidationError[],
    ) {
        this.statusCode = statusCode;
        this.message = message;
        this.reason = reason;
        this.operation = operation;
        this.validationErrors = validationErrors;
        Object.setPrototypeOf(this, ApiError.prototype);
    }
}
