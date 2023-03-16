const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// est un middleware qui analyse les corps de requête HTTP, 
//et renvoie un objet contenant les données de ces corps de requête sous forme de paires clé-valeur.
//Lorsque l'option extended est définie sur true, l'analyseur permet d'analyser les données envoyées sous forme de tableaux et d'objets 
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
})

app.post('/', function(req, res){
    // Number to give us a number not a string:
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);

    let result = num1 + num2;

    res.send('The result of the calculation is ' + result);
})


app.listen(3000, function(){
    console.log("Running on port 3000...");
} )