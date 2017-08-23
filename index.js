/**
 * Consigne, le but étant de crée un server sur le port 80: 
 * Node Template Server :
    1. create a new project
    2. initialize `npm` and install `express`
    3. stop NGINX: `systemctl stop nginx`
    4. create a webserver listening on port 80 using Node
 */

'use strict';
//doc  Servir des fichiers statiques dans Express: http://expressjs.com/fr/starter/static-files.html

//REQUIRE
const express = require('express');
const mustache = require('mustache');

let app = express();

//use est handlor c'est une function qui va etre appeler par une page web tout le temps.
//Et qui seras dispo pour tout nos requete et method http.
//les utilisateur auront acces a partir de la racince au dossier public.


/*
    TERMINAL:
    Lorsque le port écoute en dessous de 1024 on doit utiliser sudo pour excuter node index.js.
    Maintenant installer express : npm install express --save
    Test : node index.js
    Nginx redirrige le trafic avec : proxy-pass localhost:8080 vers d'autre server type cady, node, php-fpm etc...
 */

 //INSTALLER LE TEMPLATE MOUSTACHE.
 
 //doc : https://github.com/janl/mustache.js/
 //doc : https://mustache.github.io/

//test mustache.
app.get('/test', function(req, resp) {
     let str = mustache.render("Salut {{name}} !!! Ta mustache te va a merveille!",{
         name: "Djaafar"
     })
     resp.send(str);
 });

 // enregitre le moteur de template, et expres va remplacer avec le template moustahe.
 // doc : http://expressjs.com/fr/4x/api.html#app.engine
app.engine("html", function(path, option, callback) {
    fs.readFile(path, function(err, mode) {
        if(err) {
            console.log("fail to open template");
            return callback(err);
        }
        let str = mustache.render(content, option);
        return callback(null, str);
    })
})
//Remplace : app.use("/", express.static('public'));
app.set('views', './public');
app.set('view engine', 'html');


 app.listen(80, 'localhost' ,function () {
    console.log("L'application ecoute le port 80."); //le port 80 = localhost
  });