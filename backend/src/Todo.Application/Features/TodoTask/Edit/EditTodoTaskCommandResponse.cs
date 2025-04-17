namespace Todo.Application.Features.TodoTask.Edit;

public sealed record EditTodoTaskCommandResponse
{
    public required Domain.TodoTask EditedTodoTask { get; init; }
}