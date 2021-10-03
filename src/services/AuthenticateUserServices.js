import auth from "../config/auth";
import {compare} from "bcrypt"
import User from "../models/User";
import {sign} from "jsonwebtoken";
import AppError from "../errors/AppError";



class AuthenticateUserService{
    constructor(){
        this.userModel = User
    }
    async execute(email, password){
        const{secret_token,expires_in_token}= auth

        const user = await this.userModel.findOne({email})
        
        if(!user){
            throw new AppError("Email ou password incorret!")
        }
        console.log(user)

        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new AppError("Email ou password incorret!")

        }
        const token = sign({},secret_token,{
            subject:user.id,
            expiresIn:expires_in_token
        })
  
     const tokenReturn ={
         
         user:{
             name:user.name,
             email:user.email
         },
         token

     }
     return tokenReturn       


    }
}
export {AuthenticateUserService}