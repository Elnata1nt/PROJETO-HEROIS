const express = require("express");
const app = express();

app.use(express.json()); // post

// insominia ou postman


// Endpoint Principal
app.get("/", function (req, res) {
  res.json("Hello World");
});

// Endpoint /oi
app.get("/oi", function (req, res) {
  res.json("Olá, mundo!");
});

//endpoints de herois
const lista = ["Mulher maravilha" , "Capitã Marvel" , "Homem de Ferro"];
//                0                       1                  2

//read all -> [GET] /herois
app.get("/herois", function(req, res) {
    res.json(lista);
});

//  get / put / post / patch / delete


app.listen(3000,()=>{
  console.log("server rodando na porta 3000")
});