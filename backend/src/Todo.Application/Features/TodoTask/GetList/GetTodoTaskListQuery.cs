using MediatR;

namespace Todo.Application.Features.TodoTask.GetList;

public sealed record GetTodoTaskListQuery : IRequest<GetTodoTaskListQueryResponse>;