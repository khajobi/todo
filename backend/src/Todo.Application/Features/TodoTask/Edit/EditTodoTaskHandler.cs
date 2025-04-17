using FluentValidation;
using FluentValidation.Results;
using MediatR;
using Todo.Application.Abstraction;
using Todo.Domain.Exceptions;

namespace Todo.Application.Features.TodoTask.Edit;

internal sealed class EditTodoTaskHandler(ITodoTaskRepository todoTaskRepository, IUnitOfWork unitOfWork)
    : IRequestHandler<EditTodoTaskCommand, EditTodoTaskCommandResponse>
{
    public Task<EditTodoTaskCommandResponse> Handle(EditTodoTaskCommand request, CancellationToken cancellationToken)
    {
        var updatedTodoTask = unitOfWork.ExecuteWithLock(() =>
        {
            var todoTask = todoTaskRepository.GetById(request.Id) ?? throw new NotFoundException
            {
                Id = request.Id,
                Type = nameof(TodoTask),
            };
            
            var todoTaskWithSameName = todoTaskRepository.GetByName(request.NewName);
            if (todoTaskWithSameName != null && todoTaskWithSameName.Id != todoTask.Id)
            {
                throw new ValidationException("A todo task with the same name already exists.",
                [
                    new ValidationFailure
                    {
                        PropertyName = nameof(EditTodoTaskCommand.NewName),
                        ErrorMessage = "Must be unique.",
                        AttemptedValue = request.NewName
                    }
                ]);
            }
            
            todoTaskRepository.Update(todoTask, request.NewName, request.NewPriority, request.NewStatus);
            return todoTask;
        });

        var response = new EditTodoTaskCommandResponse
        {
            EditedTodoTask = updatedTodoTask
        };
        
        return Task.FromResult(response);
    }
}