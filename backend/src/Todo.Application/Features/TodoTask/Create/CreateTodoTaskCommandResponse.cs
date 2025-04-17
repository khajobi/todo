namespace Todo.Application.Features.TodoTask.Create;

public sealed record CreateTodoTaskCommandResponse
{
    public required Domain.TodoTask CreatedTodoTask { get; init; }
}