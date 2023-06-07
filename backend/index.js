const express=require('express');
require('express-async-errors');
const {storeCryptoRouter}=require('./routes/store-crypto-data');
const {getCryptoRouter}=require('./routes/get-crypto-data');
const {errorHandler}=require('./middlewares/error-handler');
const app=express();
const port=process.env.PORT ||3000;
const {sequelize}=require('./config/db-connection');
app.use(express.json());

app.use(storeCryptoRouter);
app.use(getCryptoRouter);
app.use(errorHandler);
const start=async()=>{
  await sequelize.authenticate();
  await sequelize.sync({'force':true});

  app.listen(port,()=>{
    console.log("server is listening on port " + port);
  });

}

start();