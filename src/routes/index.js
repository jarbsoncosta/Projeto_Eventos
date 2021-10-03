import {Router} from 'express'
import { authRoutes } from './authenticate.routes'
import { usersRouter } from './users.routes'

const routes = Router()

routes.use("/users", usersRouter)
routes.use(authRoutes)

export{routes}