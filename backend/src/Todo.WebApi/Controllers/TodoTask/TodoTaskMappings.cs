using Todo.WebApi.Controllers.TodoTask.Dtos;

namespace Todo.WebApi.Controllers.TodoTask;

public static class TodoTaskMappings
{
    public static TodoTaskDto ToDto(this Domain.TodoTask todoTask) => new()
    {
        Id = todoTask.Id,
        Name = todoTask.Name,
        Priority = todoTask.Priority,
        Status = todoTask.Status
    };
}