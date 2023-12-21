FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["Personal.Dev.LoggingSdk/Personal.Dev.LoggingSdk.csproj", "Personal.Dev.LoggingSdk/"]
RUN dotnet restore "Personal.Dev.LoggingSdk/Personal.Dev.LoggingSdk.csproj"
COPY . .
WORKDIR "/src/Personal.Dev.LoggingSdk"
RUN dotnet build "Personal.Dev.LoggingSdk.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "Personal.Dev.LoggingSdk.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Personal.Dev.LoggingSdk.dll"]
