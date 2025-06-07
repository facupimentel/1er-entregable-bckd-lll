import { Schema, model } from "mongoose";

const collection = "users"
const schema = new Schema({
    name: {type: String},
    email: {type: String, unique: true, required: true},
    password: {type: String, required:true},
    role: {type: String, default: "user", enum:["user", "admin"]},
    pets: {default: []}
},{timestamps: true})

const User = model(collection, schema)
export default User