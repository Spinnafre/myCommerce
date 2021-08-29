
import { Router } from "express";
import CreateProductController from '../modules/product/UseCases/CreateProduct'
import ShowProductController from '../modules/product/UseCases/ShowProduct'
import ShowProductsController from '../modules/product/UseCases/ShowProducts'
import DeleteProductsController from '../modules/product/UseCases/DeleteProduct'
import UpdateProductsController from '../modules/product/UseCases/UpdateProduct'

import { authorizationUser } from "../middlewares/ensureAuthenticated";
import { userIsAdmin } from "../middlewares/ensureAdmin";



const productRouter=Router()



productRouter.post('/product',authorizationUser,userIsAdmin,(req, res) => {
    return CreateProductController().handle(req, res)
})
productRouter.patch('/product/:id',authorizationUser,userIsAdmin,(req, res) => {
    return UpdateProductsController().handle(req, res)
})
productRouter.get('/product',(req, res) => {
    return ShowProductsController().handle(req, res)
})
productRouter.get('/product/:id',(req, res) => {
    return ShowProductController().handle(req, res)
})
productRouter.delete('/product/:id',authorizationUser,userIsAdmin,(req, res) => {
    return DeleteProductsController().handle(req, res)
})


export {productRouter}