import { Schema, model, Document } from "mongoose";

const schema = new Schema ({
    "name":String,
    "lastname":String,
    "age":Number
}, {versionKey: false});

interface IUser extends Document{
    "name":string;
    "lastname":string;
    "age":number;
}

export default model<IUser>("Users", schema);