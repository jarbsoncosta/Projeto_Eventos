
import express from 'express'
import "./db"
import cors from 'cors'
import { routes } from "./routes"

const app = express()

app.use(express.json())

app.use(routes)
app.use(cors)
app.use(express.static("public"))

app.listen(3333 , ()=>{
    console.log("Servidor rodando na porta", 3333)
})




