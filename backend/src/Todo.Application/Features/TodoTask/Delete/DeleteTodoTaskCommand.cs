using MediatR;

namespace Todo.Application.Features.TodoTask.Delete;

public sealed record DeleteTodoTaskCommand : IRequest<DeleteTodoTaskCommandResponse>
{
    public required int Id { get; init; }
}