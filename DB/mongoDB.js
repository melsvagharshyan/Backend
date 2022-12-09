import mongoose from 'mongoose';

export const Mongo = () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        mongoose.connect(process.env.DB, connectionParams);
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
}

