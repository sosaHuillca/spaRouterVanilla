const { app } = require('./server.js');
require('http')
  .createServer(app)
  .listen(process.env.PORT, console.log(`run PORT ${process.env.PORT}`))
