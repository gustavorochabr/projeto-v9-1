const fs = require('fs');
const express = require('express');
const ejs = require('ejs');
const html = require('html');
const app = express();
const http = ('http');
const server = http.createServer(app);
const session = require('express-session');
const port = process.env.PORT || 3000;
const coockieParser = require('coockie-parser');
app.use(coockieParser());
app.enable('trust-proxy');
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(require('path').join(__dirname, '/public/')));
app.get('/', async(req, res) => {
  res.sendFile(__dirname+'views/index.html')
});
const listener = server.listen(process.env.PORT, () => {
  console.log('Site rodando na porta:' + listener.adress().port);
});

const { app, BrowserWindow } = require('electron')
function criarJanela() {
    const janela = new BrowserWindow({
        width:800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    janela.loadFile('index.html')
}
app.whenReady().then(criarJanela)