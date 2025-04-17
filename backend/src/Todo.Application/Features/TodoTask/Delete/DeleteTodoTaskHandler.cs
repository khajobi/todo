using FluentValidation;
using FluentValidation.Results;
using MediatR;
using Todo.Application.Abstraction;
using Todo.Application.Features.TodoTask.Edit;
using Todo.Domain;
using Todo.Domain.Exceptions;

namespace Todo.Application.Features.TodoTask.Delete;

internal sealed class DeleteTodoTaskHandler(ITodoTaskRepository todoTaskRepository, IUnitOfWork unitOfWork)
    : IRequestHandler<DeleteTodoTaskCommand, DeleteTodoTaskCommandResponse>
{
    public Task<DeleteTodoTaskCommandResponse> Handle(DeleteTodoTaskCommand request, CancellationToken cancellationToken)
    {
        unitOfWork.ExecuteWithLock(() =>
        {
            var todoTaskToDelete = todoTaskRepository.GetById(request.Id) ?? throw new NotFoundException
            {
                Id = request.Id,
                Type = nameof(TodoTask),
            };

            if (todoTaskToDelete.Status != TodoTaskStatus.Completed)
            {
                throw new ValidationException($"A todo task with Id = {request.Id} is not completed.",
                [
                    new ValidationFailure
                    {
                        PropertyName = nameof(todoTaskToDelete.Status),
                        ErrorMessage = $"Must be equal to {TodoTaskStatus.Completed}.",
                        AttemptedValue = todoTaskToDelete.Status
                    }
                ]);
            }

            todoTaskRepository.Delete(todoTaskToDelete);
        });

        var response = new DeleteTodoTaskCommandResponse();
        return Task.FromResult(response);
    }
}