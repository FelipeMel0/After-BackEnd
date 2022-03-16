const express = require("express")
const app = express()

app.get("/createAccount", function(req, res){
    res.send()
})

app.listen(4000, function(){
    console.log("Servidor rodando na url http://localhost:4000")
})

//Configurando a porta que o sistema usará