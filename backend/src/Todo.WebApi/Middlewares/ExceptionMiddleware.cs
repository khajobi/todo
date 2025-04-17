using FluentValidation;
using Todo.Domain.Exceptions;

namespace Todo.WebApi.Middlewares;

public class ExceptionMiddleware(RequestDelegate next)
{
    public async Task Invoke(HttpContext context)
    {
        try
        {
            await next(context);
        }
        catch (Exception ex)
        {
            await HandleExceptionAsync(context, ex);
        }
    }

    private static Task HandleExceptionAsync(HttpContext context, Exception exception)
    {
        context.Response.ContentType = "application/json";
        context.Response.StatusCode = exception switch
        {
            NotFoundException => StatusCodes.Status404NotFound,
            ValidationException => StatusCodes.Status400BadRequest,
            _ => StatusCodes.Status500InternalServerError
        };

        var response = new
        {
            context.Response.StatusCode,
            exception.Message,
            ValidationErrors = exception is ValidationException validationException
                ? validationException.Errors
                : null
        };

        return context.Response.WriteAsJsonAsync(response);
    }
}