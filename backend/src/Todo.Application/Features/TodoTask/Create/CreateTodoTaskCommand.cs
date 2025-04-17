using MediatR;

namespace Todo.Application.Features.TodoTask.Create;

public sealed record CreateTodoTaskCommand : IRequest<CreateTodoTaskCommandResponse>
{
    public required string Name { get; init; }
    public required int Priority { get; init; }
}