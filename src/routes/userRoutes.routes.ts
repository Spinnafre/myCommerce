import { Router } from "express";
import CreateUserController from '../modules/accounts/UseCases/CreateUser'
import ShowUsersController from '../modules/accounts/UseCases/ShowUsers'
import ShowUserController from '../modules/accounts/UseCases/ShowUser'
import UpdateUserController from '../modules/accounts/UseCases/UpdateUser'
import { authorizationUser } from "../middlewares/ensureAuthenticated";


const userRouter=Router()



userRouter.post('/user',(req, res) => {
    return CreateUserController().handle(req, res)
})
userRouter.patch('/user',authorizationUser,(req, res) => {
    return UpdateUserController().handle(req, res)
})
userRouter.get('/user',authorizationUser,(req, res) => {
    return ShowUsersController().handle(req, res)
})
userRouter.get('/user/:id',authorizationUser,(req, res) => {
    return ShowUserController().handle(req, res)
})


export {userRouter}