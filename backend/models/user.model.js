import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
     email:{
        type:String,
        required:true,
        unique:true,
    },
     password:{
        type:String,
        required:true,
    },
     profileImageUrl:{
        type:String,
        default:"https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
    },
    role:{
        type:String,
        enum : ["admin","user"],
        default:"user",
    },
},
{timestamps:true}
)

const User = mongoose.model("User",userSchema)

export default User