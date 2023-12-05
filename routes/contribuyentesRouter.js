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

router.get('/', async (req, res) => {
  const contribuyentes = await service.find();

  res.json(contribuyentes);
})

router.get('/filter', (req, res) =>{
  res.send('Yo soy un filter');
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const contribuyente = await service.findOne(id);
  res.json(contribuyente);
})

router.post('/', async (req, res) => {
  const body = req.body;
  const newContribuyente = await service.create(body);
  res.status(201).json(newContribuyente);
})

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id,
  });
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const contribuyente = await service.update(id, body);
    res.json(contribuyente);
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
  const { id } = req.params;
  const body = req.body;
  const contribuyente = await service.update(id, body);
  res.json(contribuyente);
});

router.delete('/:id', async(req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta);
});


module.exports = router;
