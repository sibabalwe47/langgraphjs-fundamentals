import { MongoClient } from 'mongodb'
import { config } from 'dotenv'
config();

export const mongoDBClient = async () => {
    console.log("CONNECTION_STRING -->", process.env.MONGODB_ATLAS_URI)
    try {
        const mongodb = new MongoClient(process.env.MONGODB_ATLAS_URI as string, {});
        const connection = await mongodb.connect();
        const connectionPing = await mongodb.db("admin").command({ ping: 1 })
        return connection;
    } catch (error) {
        console.error(`Error connecting to MongoDB:`, error);
        process.exit(1);
        return error;     
    }
}