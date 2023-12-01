const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

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
  const contribuyentes = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    contribuyentes.push({
      nombre: faker.commerce.productName(),
      codigocontribuyente: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),

    });

  }
  res.json(contribuyentes);
})

router.get('/filter', (req, res) =>{
  res.send('Yo soy un filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json ({
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
})

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  });
})

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id,
  });
});


module.exports = router;
