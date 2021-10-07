import mongoose from "mongoose";

const DBMONGO = "mongodb+srv://fgarcia:fgarcia123@clustertestfernando.v4vv8.mongodb.net/dbintrobackend?retryWrites=true&w=majority"; 
const DATABASE = "dbintrobackend"; 

export async function startConnection(){
    await mongoose.connect(DBMONGO,{
        dbName:DATABASE,
    });
}