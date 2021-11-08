//Configurando o NodeJS para o Website
const fs = require("fs");
const express = require("express");
const ejs = require("ejs");
const html = require("html")
const app = express();
const http = require('http')
const server = http.createServer(app)
const session = require('express-session');
const port = process.env.PORT || 3000;
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.enable('trust proxy');
app.use(express.urlencoded({ extended: true }));
//app.set('view engine', 'ejs');
app.use(express.static(require("path").join(__dirname, "/public/")));

app.get("/", async(req, res) => {
  res.sendFile(__dirname+'/views/index.html')
})

const listener = server.listen(process.env.PORT, () => {
  console.log(`Site rodando na porta : ` + listener.address().port);
});
