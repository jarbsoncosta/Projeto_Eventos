import { Router } from "express"

import { CreateUsersController } from "../controllers/CreateUsersController"
import { ListAllUsersController } from "../controllers/ListAllUsersController"
import { ShowIdUserController } from "../controllers/ShowIdUserController"



const createUsersController = new CreateUsersController()
const listAllUsersController = new ListAllUsersController()
const showIdUserController = new ShowIdUserController()

const usersRouter = Router()

usersRouter.post("/", createUsersController.handle)
usersRouter.get("/", listAllUsersController.handle)
usersRouter.get("/:_id", showIdUserController.handle)



export { usersRouter }