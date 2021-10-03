import { ListAllUsersServices } from "../services/ListAllUsersServices";


class ListAllUsersController{
    async handle(request, response){
        const listAllUsersServices = new ListAllUsersServices()

        const users = await listAllUsersServices.execute()

        return response.status(201).json(users)

    }
}
export{ListAllUsersController}