import User from "../models/User"
import {hash, } from "bcrypt"
import AppError from "../errors/AppError"


class CreateUsersServices{
    constructor(){
        this.userModel = User
    }
    async execute(name, email, password){
        const userExists = await User.findOne({email})
        if(userExists){
            throw new AppError("User already exists")
        }
        const passwordHash = await hash(password, 8)
        const user = await this.userModel.create({
            name,
            email,
            password:passwordHash
        })
       
        return user
    }
}
export {CreateUsersServices}