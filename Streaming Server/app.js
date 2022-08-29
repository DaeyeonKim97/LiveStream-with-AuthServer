const media_server = require('./streaming/media_server');
const mongoose = require('mongoose');
const config = require('./config/config');
const port = config.server.port;
const express = require('express');
const app = express()
const apiRouter = require('./routes/api-route');
const thumbnail_generator = require('./thumbnail/cron_thumbnail');
const cors = require('cors');

mongoose.connect('mongodb://127.0.0.1/nodeStream',{useNewUrlParser:true}, (err)=>{
  if(err){
    console.log(err);
  }
  else{
    console.log("connected to mongoDB");
  }
});

app.use(cors());
app.use(express.json());
app.use('/stream',apiRouter);
app.use('/thumbnails',express.static('thumbnails'));



app.listen(port, ()=>console.log(`listening on ${port}...`));
media_server.run();
thumbnail_generator.start();