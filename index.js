/**
 * Consigne, le but étant de crée un server sur le port 80: 
 * Node Template Server :
    1. create a new project
    2. initialize `npm` and install `express`
    3. stop NGINX: `systemctl stop nginx`
    4. create a webserver listening on port 80 using Node
 */

'use strict';

const express = require('express');
const mustache = require('mustache');
const fs = require('fs');

let app = express();

app.use(express.static('public'));

//Ajout tableau.
let db = [{name1: "Cyrille la veine", name2 : "Manu le cascadeur", name3 : "Yannis le grand frère"}];

app.get('/', function(req, resp) {
     resp.render("index", {
         //nameList: db,
         //nameList2: DB,
         name: "Djaafar",
         age: 25,
         test : db[0]
     })
 });

let DB = [
    {
        name: "Bienvenus sur la place",
        place : "Lyon 3"
    },
    {
        name: "Apprendre le web",
        place : "Lyon 8"
    },
    {
        name: "Découverte A-Z du code obscure",
        place : "Vénissieux"
    },
] 

app.engine("html", function(path, options, callback) {
    fs.readFile(path, function(err, content) {
        if(err) {
            console.log("echec de l'ouverture du template");
            return callback(err);
        }
        let str = mustache.render(content.toString(), options);
        return callback(null, str);
    })
});

//A préciser quand on utilse le template mustache, remplace ou équivalent : app.use(express.static("public"));
app.set('views', './template');
app.set('view engine', 'html');

app.listen(80, 'localhost' ,function () {
    console.log("L'application ecoute le port 80."); //le port 80 = localhost
});