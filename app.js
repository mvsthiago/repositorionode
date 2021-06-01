//importando o express 
var express = require('express');

//Criando a var app para chamar os métodos do express
var app = express();

//setando a view engine => EJS
app.set('view engine', 'ejs');

//Config path do arquivos estáticos
app.use(express.static('./public'));


app.get('/', function(req,res){
    res.render('home/index.ejs');
});

app.get('/String', function(req,res){
    res.render('nomes/nomes');
});

app.get('/Stringmtdo', function(req,res){
    res.render('nomes2/nomes2');
});

app.listen(process.env.PORT || 5000, function(){
    console.log("Servidor rodando com Express");
});