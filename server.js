import express from 'express';
import { Mongo } from './DB/mongoDB.js';
import adminRouter from './Routers/admin-router.js';
import clientRouter from './Routers/client-router.js'


Mongo();

// EXPRESS

const app = express();
app.use(express.json());


app.use("/api", adminRouter);
app.use("/api", clientRouter);



app.listen(process.env.PORT);