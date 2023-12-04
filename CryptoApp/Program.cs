
namespace CryptoApp
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowSpecificOrigin", builder =>
                {
                    builder
                        .AllowAnyOrigin() // Замените на разрешенные домены
                        .AllowAnyMethod()
                        .AllowAnyHeader();
                });
            });

            builder.Services.AddControllers();
            builder.Services.AddHttpClient();

            var app = builder.Build();
            app.MapControllers();

            app.UseCors("AllowSpecificOrigin");
            if (app.Environment.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            // Configure the HTTP request pipeline.
            if (!app.Environment.IsDevelopment())
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseRouting();


            

            app.MapFallbackToFile("index.html");

            app.Run();
        }
    }
}