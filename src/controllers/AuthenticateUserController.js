import { AuthenticateUserService } from "../services/AuthenticateUserServices"


class AuthenticateUserController{
    async handle(request, response){
        const {email, password} = request.body

        const authenticateUserService = new AuthenticateUserService()

        const token = await authenticateUserService.execute(
            email,
            password
        )
        return response.json(token)
    }
}

export {AuthenticateUserController}