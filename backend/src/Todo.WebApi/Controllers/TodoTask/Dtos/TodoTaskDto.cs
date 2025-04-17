using Todo.Domain;

namespace Todo.WebApi.Controllers.TodoTask.Dtos;

public sealed record TodoTaskDto
{
    public required int Id { get; init; }
    public required string Name { get; init; }
    public required int Priority { get; init; }
    public required TodoTaskStatus Status { get; init; }
}