const express = require('express');

const ContribuyentesService = require('./../services/contribuyenteService')

const router = express.Router();

const service = new ContribuyentesService();

/*router.get('/', (req, res) => {

  res.json([
    {
      codigocontribuyente: '01',
      codigopredio: 123,
      anioi: 1995,
      aniof: 2023,
      fechaproy: 2023,
      aplica_des: true,
      procedencia: "Todas-las-procedencias",
      tipo:  "Agrupado-Trimestralmente",
      des_materia: "Impuesto-Predial",
      situacion_deuda: "Todas-las-Opciones"

    },
    {
      codigocontribuyente: '02',
      codigopredio: 443,
      anioi: 1996,
      aniof: 2023,
      fechaproy: 2023,
      aplica_des: true,
      procedencia: "Todas-las-procedencias",
      tipo:  "Agrupado-Trimestralmente",
      des_materia: "Impuesto-Predial",
      situacion_deuda: "Todas-las-Opciones"

    }
  ]);
})*/

router.get('/', (req, res) => {
  const contribuyentes = service.find();

  res.json(contribuyentes);
})

router.get('/filter', (req, res) =>{
  res.send('Yo soy un filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  if (id === '999') {
    res.status(404).json ({
      message: 'not found'
  });
  } else {
      res.status(200).json ({
        id,
        codigocontribuyente: '02',
        codigopredio: 443,
        anioi: 1996,
        aniof: 2023,
        fechaproy: 2023,
        aplica_des: true,
        procedencia: "Todas-las-procedencias",
        tipo:  "Agrupado-Trimestralmente",
        des_materia: "Impuesto-Predial",
        situacion_deuda: "Todas-las-Opciones"
    });
  }
})

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body
  });
})

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id,
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'deleted',
    id,
  });
});


module.exports = router;
