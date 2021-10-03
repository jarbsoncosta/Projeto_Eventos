import User from "../models/User"


class ShowIdUserServices{
    constructor(){
        this.userModel = User
    }
    async execute(_id){
        const user = await this.userModel.findOne({_id})
        return user

    }
}
export{ShowIdUserServices}