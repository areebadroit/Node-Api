import express from "express";
import morgan from "morgan";
// import { json, urlencoded } from "body-parser";
import pkg from 'body-parser';
const { json, urlencoded } = pkg;
import Mongoose  from "mongoose";
import User from "../Models/user.js";
import {getAllUsers,getUserById,updateUserByID} from "./userModelImpl.js";
import postRouter from "./post/post-router";

const app = express();
const router = express.Router();
app.use(morgan('dev'));
app.use(json());
app.use(urlencoded({extended: true}));

const conn = () => {
    return Mongoose.connect('mongodb://localhost:27017/UnacadNode',{ useNewUrlParser: 
    true, useUnifiedTopology: true });
}
conn()
.then(async connection=>{
    console.log("Connection established successfully");
    await User.deleteMany({});
    const newUser = await User.create({
        firstName: 'Sanket',
        lastName: 'Singh',
        email: 'ss@gmail.com'
    });
    console.log(newUser);

    await User.create([
        {
            firstName: 'Sarthak',
            lastName: 'Jain',
            email: 'sj@gmail.com'
        }, 
        {
            firstName: 'Upkar',
            email: 'u@gmail.com',
            underAge: true
        }
    ]);

    const u1 = await getAllUsers();
    const u2 = await getUserById(newUser.id);
    const u3 = await updateUserByID(newUser.id, {underAge: true});
    console.log(u1);
    console.log(u2);
    console.log(u3);
})
app.use('/api/post',postRouter);

// router.get('/', (req, res) => {
//     res.send({message: "OK GET"});
// });
// router.get('/post', (req, res) => {
//     res.send({message: "Router OK"});
// });



export const start = () => {
    app.listen(3000,()=>{
        console.log("Server Up and Running");
    });
    
}