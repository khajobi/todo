namespace Todo.Application.Features.TodoTask.GetList;

public sealed record GetTodoTaskListQueryResponse
{
    public required IEnumerable<Domain.TodoTask> TodoTasks { get; init; }
}