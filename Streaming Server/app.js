const media_server = require('./streaming/media_server');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
const bodyParser = require('body-parser');
const config = require('./config/config');
const host = config.server.host;
const port = config.server.port;
const express = require('express');
const app = express()
const apiRouter = require('./routes/api-route');

mongoose.connect('mongodb://127.0.0.1/nodeStream',{useNewUrlParser:true}, (err)=>{
  if(err){
    console.log(err);
  }
  else{
    console.log("connected to mongoDB");
  }
});

// app.use(session({
//   store: MongoStore.create({
//     mongoUrl: 'mongodb://127.0.0.1/nodeStream',
//     ttl: 14 * 24 * 60 * 60 // = 14 days. Default
//   }),
//   secret: config.server.secret,
//   maxAge : Date().now + (60 * 1000 * 30),
//   resave : true,
//   saveUninitialized : false,
// }));
app.use(express.json());
app.use('/stream',apiRouter);



app.listen(port, ()=>console.log(`listening on ${port}...`));
media_server.run();