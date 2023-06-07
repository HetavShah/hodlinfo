const express = require('express');
const router = express.Router();
const axios = require('axios');
const { CryptoCurrency } = require('../model/crypto_currency');
const { sequelize } = require('../config/db-connection');
router.post('/api/v1/crypto/data', async (req, res) => {
  const { data } = await axios.get('https://api.wazirx.com/api/v2/tickers');
  let count = 0;
  for (let key in data) {
    const { base_unit, last, volume, sell, buy, name } = data[key];
      await CryptoCurrency.create({
        base_unit,
        last,
        volume,
        sell,
        buy,
        name,
      });
    count++;
    if (count == 10) break;
  }

  return res.status(201).send({
    message:'Data Fetched successfully'
  });
});
module.exports = {
  storeCryptoRouter: router,
};
