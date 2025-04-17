using Microsoft.Extensions.DependencyInjection;
using Todo.Application.Abstraction;

namespace Todo.Infrastructure;

public static class ServiceCollectionExtensions
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services)
    {
        services.AddScoped<IUnitOfWork, UnitOfWork>();

        return services;
    }
}