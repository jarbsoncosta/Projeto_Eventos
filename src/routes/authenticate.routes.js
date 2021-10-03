
import {Router} from 'express'
import { AuthenticateUserController } from '../controllers/AuthenticateUserController'


const authenticateUserController = new AuthenticateUserController()

const authRoutes = Router()

authRoutes.post("/sessions", authenticateUserController.handle)

export{authRoutes}