import AppError from "../errors/AppError"
import User from "../models/User"


class ShowIdUserServices {
    constructor() {
        this.userModel = User
    }
    async execute(id) {

        const user = await this.userModel.findOne({ id })

        if (!user) {
            throw new Error("User not found", 400)
        }
        return user



    }
}
export { ShowIdUserServices }