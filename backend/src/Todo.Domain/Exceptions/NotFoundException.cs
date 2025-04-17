namespace Todo.Domain.Exceptions;

public class NotFoundException : Exception
{
    public required string Type { get; init; }
    public required object Id { get; init; }
}