using Todo.Application.Abstraction;

namespace Todo.Infrastructure;

public class UnitOfWork : IUnitOfWork
{
    private static readonly Lock Lock = new();
    
    public void ExecuteWithLock(Action action)
    {
        lock (Lock)
        {
            action();
        }
    }

    public TResult ExecuteWithLock<TResult>(Func<TResult> action)
    {
        lock (Lock)
        {
            return action();
        }
    }
}