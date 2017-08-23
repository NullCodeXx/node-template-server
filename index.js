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

const express = require('express');
let app = express();
app.listen(80, 'localhost' ,function () {
  console.log("L'application ecoute le port 80.");
});
app.use("/", express.static('public'));

app.use(function(req, res) { 
  res.status(404);
  res.sendFile(__dirname + "/public/404.html"); //__dirname est remplacer par /home/solo/...mondossiercourant.
});
/*
    TERMINAL:
    Lorsque le port écoute en dessous de 1024 on doit utiliser sudo pour excuter node index.js.
    Maintenant installer express : npm install express --save
    Test : node index.js
*/