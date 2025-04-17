namespace Todo.WebApi.Controllers.TodoTask.Dtos;

public sealed record CreateTodoTaskDto
{
    public required string Name { get; init; }
    public required int Priority { get; init; }
}