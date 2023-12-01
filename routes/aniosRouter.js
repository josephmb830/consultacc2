const express = require('express');

const router = express.Router();

router.get('/:anioId/contribuyentes/:contribuyenteId', (req, res) => {
  const { anioId, contribuyenteId } = req.params;
  res.json({
    anioId,
    contribuyenteId,
  });
})

router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send('No hay parametros');
  }
});

module.exports = router;
