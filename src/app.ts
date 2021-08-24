import express, { NextFunction, Request, Response } from 'express';
import "express-async-errors";
// import swaggerUi from "swagger-ui-express";
import cors from "cors";
import "reflect-metadata";

import createConnection from './database'
import { AppErros } from './errors/AppErros';
import {userRouter} from './routes/userRoutes.routes'
import { authRouter } from './routes/authRoute.routes';


createConnection().then(_=>console.log('CONECATODO')).catch(err=>console.log('asdasd'))

const app = express();

app.use(express.json())
app.use(cors())


app.use(userRouter)
app.use(authRouter)

app.use((err:Error, req:Request, res: Response,next:NextFunction) => {
    if(err instanceof AppErros){
        return res.status(err.statusCode).json({msg:err.msg})
    }
    return res.status(500).json({msg:err.message})
})

export {app}