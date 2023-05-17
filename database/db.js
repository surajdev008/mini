import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {

    const MONGODB_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-fcqzvgc-shard-00-00.vejhoob.mongodb.net:27017,ac-fcqzvgc-shard-00-01.vejhoob.mongodb.net:27017,ac-fcqzvgc-shard-00-02.vejhoob.mongodb.net:27017/?ssl=true&replicaSet=atlas-fjwwjn-shard-0&authSource=admin&retryWrites=true&w=majority`;

    mongoose.connect(MONGODB_URI, { useNewUrlParser:true })

    mongoose.connection.on('connected', ()=>{
        console.log('Database connected');
    })

    mongoose.connection.on('disconected', ()=>{
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', ()=>{
        console.log('Error ');
    })

}

export default Connection;