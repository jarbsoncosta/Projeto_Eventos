import mongoose from "mongoose";
mongoose.connect("mongodb+srv://dbUser:PrbbZRh8MyTkQJHj@cluster0.n2gdq.mongodb.net/eventdb?retryWrites=true&w=majority")
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
    console.log("conectado com sucesso")
})