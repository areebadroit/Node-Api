import Mongoose from "mongoose";
import {config} from "../config/development";

export const connect =(url = config.databaseURL, opts={}) =>{
    console.log("MongoDB Connected");
    return Mongoose.connect(url,{
        ...opts, useNewUrlParser:true,
        useUnifiedTopology: true,
        useCreateIndex:true
    });
}