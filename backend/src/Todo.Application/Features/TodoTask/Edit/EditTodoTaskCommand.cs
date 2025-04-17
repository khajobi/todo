using MediatR;
using Todo.Domain;

namespace Todo.Application.Features.TodoTask.Edit;

public sealed record EditTodoTaskCommand : IRequest<EditTodoTaskCommandResponse>
{
    public required int Id { get; init; }
    public required string NewName { get; init; }
    public required int NewPriority { get; init; }
    public required TodoTaskStatus NewStatus { get; init; }
}