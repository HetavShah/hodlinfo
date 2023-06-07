const {CryptoCurrency}=require('../model/crypto_currency');
const express=require('express');

const router=express.Router();

router.get('/api/v1/crypto/data',async(req,res)=>{
  const base_unit=req.query.unit;
  if(!base_unit)
  {
    return res.status(400).send({error:'unit is required'});
  }
    const data=await CryptoCurrency.findAll({
      where:{
        base_unit:base_unit.toLowerCase(),
      },
      limit: 1,
      order:[['id','DESC']]
    });
  return res.status(200).send(data[0]);
})

module.exports={
  getCryptoRouter:router
}