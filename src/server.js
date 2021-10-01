//modules
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

//config
const port = 3333


const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static("public")) //pasta onde vai ficar os arquivos estaticos(imagens)


//conexão com mongodb Atlas
mongoose.connect("mongodb+srv://dbUser:PrbbZRh8MyTkQJHj@cluster0.n2gdq.mongodb.net/eventdb?retryWrites=true&w=majority")
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
    console.log("conectado com sucesso")
})

app.listen(port , ()=>{
    console.log("Servidor rodando na porta", port)
})
