import mongoose, { isValidObjectId, SchemaTypes } from "mongoose"
import {v4 as uuidv4} from 'uuid'

const UserSchema = new mongoose.Schema({
    id:{
        type:String, default: uuidv4()
    },
   
    name: {
        type:String,
        
    },
    
    email:{
        type:String,
        
    },
         
    password:{
        type:String,
        
    }
       
},
    {
        timestamps: true
    })

export default mongoose.model("User", UserSchema)
