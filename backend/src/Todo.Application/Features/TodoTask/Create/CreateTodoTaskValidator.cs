using FluentValidation;

namespace Todo.Application.Features.TodoTask.Create;

public sealed class CreateTodoTaskValidator : AbstractValidator<CreateTodoTaskCommand>
{
    public CreateTodoTaskValidator()
    {
        RuleFor(r => r.Name)
            .NotEmpty()
            .MaximumLength(50);

        RuleFor(r => r.Priority)
            .GreaterThanOrEqualTo(1)
            .LessThanOrEqualTo(100);
    }
}