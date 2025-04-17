using FluentValidation;

namespace Todo.Application.Features.TodoTask.Delete;

public sealed class DeleteTodoTaskValidator : AbstractValidator<DeleteTodoTaskCommand>
{
    public DeleteTodoTaskValidator()
    {
        RuleFor(r => r.Id)
            .NotEmpty()
            .GreaterThan(0);
    }
}