import { mongoDBClient } from './mongo'


const startServer = (async () => {
    console.log(`Establishing MongoDB connection`);
    const mongodb = await mongoDBClient();

    if(mongodb) {
        
    }
})();