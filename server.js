import express from 'express';
import mongoose from 'mongoose';
import adminRouter from './Routes/admin-router.js';
import clientRouter from './Routes/client-router.js'



//------EXPRESS-------

const app = express();
app.use(express.json());

//--------Routes-------

app.use("/api", adminRouter);
app.use("/api", clientRouter);



//------------------MongoDB Connection---------------------

(async function () {
    try {
        await mongoose.connect(process.env.DB);
        app.listen(process.env.PORT);
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
}
)();
