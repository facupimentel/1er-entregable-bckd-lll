import { Schema, model } from "mongoose";

const collection = "pets"
const schema = new Schema(
  {
    id: {type: String},
    name: {type: String},
    species: {type: String},
    age: {type: Number},
  },
  { timestamps: true }
);

const Pet = model(collection, schema)
export default Pet