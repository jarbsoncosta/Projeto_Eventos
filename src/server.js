import 'express-async-errors';
import express from 'express'

import "./db"
import cors from 'cors'
import { routes } from "./routes"
import AppError from './errors/AppError'

const app = express()
    
app.use(express.json())

app.use(routes)
app.use(cors)
app.use(express.static("public"))


app.use((error, request, response, next) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    }
    console.log(error)
    return response.status(500).json({
        status:"error",
        message:"Erro Interno do servidor"
    })
})

app.listen(3333, () => {
    console.log("Servidor rodando na porta", 3333)
})




