### Pre Requisites
- Dotnet Core SDK 2.0
- NodeJS + npm

### Get source
- `git clone git@github.com:balinabbb/code4money.git && cd code4money && npm install && dotnet restore && dotnet run`
- go to http://127.0.0.1:5000

### Dev
- run without debug: `dotnet run watch` for hotreload on source code changes
- debug 
  - C#: from visual studio using IIS
  - Js: Could be debugged from VS or from Chrome Inspector
- test
  - Min. 90% coverage, TDD (VS2017 Live Unit testing is useful)
- deploy
  - Hopefully with Docker
