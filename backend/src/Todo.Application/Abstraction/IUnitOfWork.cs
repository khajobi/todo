namespace Todo.Application.Abstraction;

public interface IUnitOfWork
{
    void ExecuteWithLock(Action action);
    TResult ExecuteWithLock<TResult>(Func<TResult> action);
}