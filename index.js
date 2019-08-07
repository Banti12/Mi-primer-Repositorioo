const Math = require('./Math.js');
const colors = require('colors');
const os = require('os');
const fs=require('fs');
/*console.log(colors.green(Math.suma(5,5)));
console.log('Hola Mundo'.blue);
console.log(os.freemem());
console.log(os.totalmem());
const archivo = fs.writeFile('./texto.txt','Hola brayan',function(err){
                                        if(err)
                                        {
                                            console.log(err);
                                        }else{
                                            console.log('Archivo creado');
                                        }

                                        }
);

console.log('Ultima linea de codigo');*/
// leer archivo
/*
fs.readFile('./texto.txt',function(err,data){
    if(err)
    {
        console.log('Erro en archivo' + err);
    }else{
        console.log(data.toString());
    }
});*/

//Primera forma de crear paguina
/*
const http = require('http');
http.createServer(function(req,res){
    res.write('<h1> HOLA MUNDO </h1>');
    res.end();
}).listen(3000);*/

//Segunda forma
/*
const http = require('http');
const handleServer = function(req,res){
    res.writeHead(200,{'Content-type':'text/html'});
    res.write('<h1> HOLA MUNDO </h1>');
    res.end();
}

http.createServer(handleServer).listen(3000);
*/

//Tercera Forma
/*const http = require('http');
const handleServer = function(req,res){
    res.writeHead(200,{'Content-type':'text/html'});
    res.write('<h1> HOLA MUNDO </h1>');
    res.end();
}

const server =http.createServer(handleServer);
server.listen(3000,()=>{
    console.log('Server on port 3000'.red);
});*/

//Cuata forma
const express = require('express');
const server = express();
server.get('/',function (req,res){
    res.send('<h1> Express </h1>');
});
server.listen(3000,()=>{
    console.log('Server on port 3000'.red);
});

