import { ShowIdUserServices } from "../services/ShowIdUserServices";



class ShowIdUserController{
    async handle(request, response){
        const {id} = request.params
        const showIdUserServices = new ShowIdUserServices()

        const user = await showIdUserServices.execute(id)

        return response.status(201).json(user)

    }
}

export{ShowIdUserController}