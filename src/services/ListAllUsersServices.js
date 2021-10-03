import User from "../models/User";


class ListAllUsersServices{
    constructor(){
        this.userModel = User
    }
    async execute(){
        const users = await this.userModel.find()
        return users
    }
}
export {ListAllUsersServices}