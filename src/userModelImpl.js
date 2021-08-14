import User from "../Models/user.js";

export const getAllUsers = () =>{
    //console.log("Reached");
    return User.find({}).exec();
    //when you call exec(), it makes sure it returns a promise else it returns a query
}

export const getUserById = (id) => {
    return User.findById(id).exec();
}

export const updateUserByID = (id, params) => {
    return User.findByIdAndUpdate(id, params, {new: true}).exec();
}

export default {getAllUsers,getUserById,updateUserByID};