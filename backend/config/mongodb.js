import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connection.on("connected", () => {
        console.log("se establecio la conexión con MongoDB");
        
    })

    await mongoose.connect(`${process.env.mongoDB_URL}/e-commerce`)
}

export default connectDB;
