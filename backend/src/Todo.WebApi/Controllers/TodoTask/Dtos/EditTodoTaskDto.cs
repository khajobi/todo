using Todo.Domain;

namespace Todo.WebApi.Controllers.TodoTask.Dtos;

public sealed record EditTodoTaskDto
{
    public required string NewName { get; init; }
    public required int NewPriority { get; init; }
    public required TodoTaskStatus NewStatus { get; init; }
}