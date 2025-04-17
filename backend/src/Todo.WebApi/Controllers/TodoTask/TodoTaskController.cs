using MediatR;
using Microsoft.AspNetCore.Mvc;
using Todo.Application.Features.TodoTask.Create;
using Todo.Application.Features.TodoTask.Delete;
using Todo.Application.Features.TodoTask.Edit;
using Todo.Application.Features.TodoTask.GetList;
using Todo.WebApi.Controllers.TodoTask.Dtos;

namespace Todo.WebApi.Controllers.TodoTask;

[ApiController]
[Route("[controller]")]
public class TodoTaskController(IMediator mediator) : ControllerBase
{
    [HttpPost]
    public async Task<TodoTaskDto> CreateAsync([FromBody] CreateTodoTaskDto createTodoTaskDto, CancellationToken cancellationToken)
    {
        var command = new CreateTodoTaskCommand
        {
            Name = createTodoTaskDto.Name,
            Priority = createTodoTaskDto.Priority
        };

        var response = await mediator.Send(command, cancellationToken);

        return response.CreatedTodoTask.ToDto();
    }

    [HttpGet]
    public async Task<IEnumerable<TodoTaskDto>> GetListAsync(CancellationToken cancellationToken)
    {
        var query = new GetTodoTaskListQuery();

        var response = await mediator.Send(query, cancellationToken);

        return response.TodoTasks
            .Select(t => t.ToDto())
            .ToList();
    }

    [HttpPut("{id:int}")]
    public async Task<TodoTaskDto> UpdateAsync(int id, [FromBody] EditTodoTaskDto editTodoTaskDto, CancellationToken cancellationToken)
    {
        var command = new EditTodoTaskCommand
        {
            Id = id,
            NewName = editTodoTaskDto.NewName,
            NewPriority = editTodoTaskDto.NewPriority,
            NewStatus = editTodoTaskDto.NewStatus,
        };
        var response = await mediator.Send(command, cancellationToken);

        return response.EditedTodoTask.ToDto();
    }

    [HttpDelete("{id}")]
    public async Task DeleteAsync(int id, CancellationToken cancellationToken)
    {
        var command = new DeleteTodoTaskCommand { Id = id };

        await mediator.Send(command, cancellationToken);
    }
}