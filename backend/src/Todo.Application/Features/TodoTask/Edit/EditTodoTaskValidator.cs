using FluentValidation;

namespace Todo.Application.Features.TodoTask.Edit;

public sealed class EditTodoTaskValidator : AbstractValidator<EditTodoTaskCommand>
{
    public EditTodoTaskValidator()
    {
        RuleFor(r => r.NewName)
            .NotEmpty()
            .MaximumLength(50);

        RuleFor(r => r.NewPriority)
            .GreaterThanOrEqualTo(1)
            .LessThanOrEqualTo(100);
    }
}