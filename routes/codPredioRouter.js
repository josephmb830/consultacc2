const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const { codPredio } = req.query;
  if (codPredio) {
    res.json({
      codPredio,
    });
  } else {
    res.send('No hay parametros');
  }
});


module.exports = router;
