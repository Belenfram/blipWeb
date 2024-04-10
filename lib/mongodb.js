import mongoose from "mongoose";

export const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Conectado a MongoDB");
    } catch (error) {
        console.log("Error al conectar a MongoDB: ", error);
    }
}