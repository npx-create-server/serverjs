const app = require('./startup/app');
const db = require('./startup/db');
require('./routers')(app);

const port = process.env.PORT;
const start = async () => {
    await db();
    app.listen(port, () => {
        console.log(`server started at port: ${port}`);
    });
};

start();
