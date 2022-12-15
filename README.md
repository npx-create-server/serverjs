# BOILERPLATE FOR NODEJS - NON TYPESCRIPT

This project helps you automate the setting up of server process.

# WHATS IN THIS PACKAGE

-   ### CONTROLLERS - this folder is where you setup most of your business logic e.g
    -   creating and getting user
-   ### ROUTERS - this folder contains http request paths to run your controllers e.g

```
    http://localhost:8000/api/user/getuser
    http://localhost:8000/api/user/createuser
```

-   ### STARTUP - this folder contains two files

    -   app.js - setups basic middlewares for running static folder and how data is processed across your server
    -   db.js - spins up a mongoose server for you

-   #### server.js - this file is responsible for spinning up your server, error handling, and setting up of middlewares to be used everywhere in the server

-   ### package.json - this file is is where all your scripts and project configurations are located e.g
    -   npm start server, npm run dev
