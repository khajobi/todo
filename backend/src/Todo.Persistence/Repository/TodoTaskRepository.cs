using Todo.Application.Abstraction;
using Todo.Domain;

namespace Todo.Persistence.Repository;

public class TodoTaskRepository : ITodoTaskRepository
{
    private static int _nextId = 5;
    private static readonly List<TodoTask> TodoTasks =
    [
        new() { Id = 1, Name = "Task 1", Priority = 1, Status = TodoTaskStatus.NotStarted },
        new() { Id = 2, Name = "Task 2", Priority = 1, Status = TodoTaskStatus.NotStarted },
        new() { Id = 3, Name = "Task 3", Priority = 1, Status = TodoTaskStatus.InProgress },
        new() { Id = 4, Name = "Task 4", Priority = 1, Status = TodoTaskStatus.Completed }
    ];
    
    public TodoTask Create(string name, int priority)
    {
        var newTodoTask = new TodoTask
        {
            Id = _nextId++,
            Name = name,
            Priority = priority,
            Status = TodoTaskStatus.NotStarted
        };
        
        TodoTasks.Add(newTodoTask);
        return newTodoTask;
    }

    public TodoTask? GetById(int id)
    {
        return TodoTasks.SingleOrDefault(t => t.Id == id);
    }
    
    public TodoTask? GetByName(string name)
    {
        return TodoTasks.SingleOrDefault(t => string.Equals(t.Name, name, StringComparison.CurrentCultureIgnoreCase));
    }
    
    public IEnumerable<TodoTask> GetList()
    {
        return TodoTasks;
    }

    public void Update(TodoTask todoTask, string newName, int newPriority, TodoTaskStatus newStatus)
    {
        todoTask.Name = newName;
        todoTask.Priority = newPriority;
        todoTask.Status = newStatus;
    }

    public void Delete(TodoTask todoTask)
    {
        TodoTasks.Remove(todoTask);
    }
}