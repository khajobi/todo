namespace Todo.Domain;

public class TodoTask
{
    public required int Id { get; set; }
    public required string Name { get; set; }
    public required int Priority { get; set; }
    public TodoTaskStatus Status { get; set; }
}