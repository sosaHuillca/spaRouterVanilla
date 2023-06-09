const fs = require("node:fs")
module.exports = {
  'blog':{
    template: send
  },
  'contacto':{
    template: send
  },
  'home':{
    template: send
  },
  'home-contenido':{
    template: othersend
  },
  'blog-contenido':{
    template: othersend
  },
  'contacto-contenido':{
    template: othersend
  },
  '':{
    template: send,
  },
}

function send(res, page){
  let mipage = page || 'index'
      res.writeHead(200, {'Content-Type': 'text/html'});
  fs.createReadStream(`./pages/${mipage}.html`,{encoding:"utf-8"}).pipe(res)
}
function othersend(res, page){
      res.writeHead(200, {'Content-Type': 'text/html'});
  fs.createReadStream(`./pages/${page}.html`,{encoding:"utf-8"}).pipe(res)
}
