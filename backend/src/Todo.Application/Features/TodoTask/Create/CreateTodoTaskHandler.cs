using FluentValidation;
using FluentValidation.Results;
using MediatR;
using Todo.Application.Abstraction;

namespace Todo.Application.Features.TodoTask.Create;

internal sealed class CreateTodoTaskHandler(ITodoTaskRepository todoTaskRepository, IUnitOfWork unitOfWork)
    : IRequestHandler<CreateTodoTaskCommand, CreateTodoTaskCommandResponse>
{
    public Task<CreateTodoTaskCommandResponse> Handle(CreateTodoTaskCommand request,
        CancellationToken cancellationToken)
    {
        var newTodoTask = unitOfWork.ExecuteWithLock(() =>
        {
            var todoTaskWithSameName = todoTaskRepository.GetByName(request.Name);
            if (todoTaskWithSameName is not null)
            {
                throw new ValidationException("A todo task with the same name already exists.",
                [
                    new ValidationFailure
                    {
                        PropertyName = nameof(CreateTodoTaskCommand.Name),
                        ErrorMessage = "Must be unique.",
                        AttemptedValue = request.Name
                    }
                ]);
            }

            return todoTaskRepository.Create(request.Name, request.Priority);
        });

        var response = new CreateTodoTaskCommandResponse
        {
            CreatedTodoTask = newTodoTask
        };

        return Task.FromResult(response);
    }
}