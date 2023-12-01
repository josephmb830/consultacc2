const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const { codigo } = req.query;
  if (codigo) {
    res.json({
      codigo,
    });
  } else {
    res.send('No hay parametros');
  }
});


module.exports = router;
