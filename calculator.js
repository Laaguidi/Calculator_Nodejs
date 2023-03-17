const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// est un middleware qui analyse les corps de requête HTTP, 
//et renvoie un objet contenant les données de ces corps de requête sous forme de paires clé-valeur.
//Lorsque l'option extended est définie sur true, l'analyseur permet d'analyser les données envoyées sous forme de tableaux et d'objets 
app.use(bodyParser.urlencoded({extended: true}));
//home Route:
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

app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmicalculator.html");
})
app.post("/bmicalculator", function(req, res) {
   let weight = parseFloat(req.body.weight);
   let height = parseFloat(req.body.height);

   let bmi = weight / (height * weight);

   res.send('Your BMI is ' + bmi);
})


app.listen(3000, function(){
    console.log("Running on port 3000...");
} )