const rute = require('./route.js');
const path = require('path')
const fs = require("node:fs")

function app(req, res){
  const clientPath = path.basename(req.url)
  const extension = path.extname(req.url);
  try{
    if(rute[clientPath]){
      rute[clientPath].template(res, clientPath)
    }
    if(extension == '.css'){
      res.writeHead(200, {'Content-Type': 'text/css'});
      fs.createReadStream(`./style/${clientPath}`,{encoding:"utf-8"}).pipe(res)
    }
    if(extension == '.js'){
      res.writeHead(200, {'Content-Type': 'application/javascript'});
      fs.createReadStream(`./js/${clientPath}`,{encoding:"utf-8"}).pipe(res)
    }
  } catch(err){
    console.log(err)
  }
}

module.exports = { app }
