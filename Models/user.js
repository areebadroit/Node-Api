import Mongoose from 'mongoose';

const userSchema  =  Mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:false
    },
    email: {
        type: String,
        required: true,
        
    },//unique: true // this is not a validation it's an index
    underAge: {
        type: Number,
        default: false
    }
});
const User = Mongoose.model('user', userSchema);
export default User;