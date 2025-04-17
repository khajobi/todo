using Microsoft.Extensions.DependencyInjection;
using Todo.Application.Abstraction;
using Todo.Persistence.Repository;

namespace Todo.Persistence;

public static class ServiceCollectionExtensions
{
    public static IServiceCollection AddPersistence(this IServiceCollection services)
    {
        services.AddScoped<ITodoTaskRepository, TodoTaskRepository>();
        
        return services;
    }
}