var express = require('express');
var http = require('http');

var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('./public/html'));

app.post('/cadastra', function(requisicao, resp){
    var nome = requisicao.body.nome; 
    var login = requisicao.body.login;
    resp.render('resposta', {nome, login})
});


var servidor = http.createServer(app);
servidor.listen(8080);

console.log("servidor rodando...");
