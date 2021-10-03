import { CreateUsersServices } from "../services/CreateUsersServices"

class CreateUsersController{

    async  handle(request, response){
        const {  name,  email,  password} = request.body
        
        const createUsersServices = new CreateUsersServices()
        const user = await createUsersServices.execute(
            name,
            email,
            password
        )
        return response.status(201).json(user)
    }
}
export  {CreateUsersController}