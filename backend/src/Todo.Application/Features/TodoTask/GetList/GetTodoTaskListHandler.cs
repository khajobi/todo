using MediatR;
using Todo.Application.Abstraction;

namespace Todo.Application.Features.TodoTask.GetList;

internal sealed class GetTodoTaskListHandler(ITodoTaskRepository todoTaskRepository) : IRequestHandler<GetTodoTaskListQuery, GetTodoTaskListQueryResponse>
{
    public Task<GetTodoTaskListQueryResponse> Handle(GetTodoTaskListQuery request, CancellationToken cancellationToken)
    {
        var todoTasks = todoTaskRepository.GetList().ToList();

        var response = new GetTodoTaskListQueryResponse
        {
            TodoTasks = todoTasks
        };

        return Task.FromResult(response);
    }
}