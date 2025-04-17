using Todo.Domain;

namespace Todo.Application.Abstraction;

public interface ITodoTaskRepository
{
    TodoTask Create(string name, int priority);
    TodoTask? GetById(int id);
    TodoTask? GetByName(string name);
    IEnumerable<TodoTask> GetList();
    void Update(TodoTask todoTask, string newName, int newPriority, TodoTaskStatus newStatus);
    void Delete(TodoTask todoTask);
}