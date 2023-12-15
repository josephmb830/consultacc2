// Para descuento y fecha de proyección

// Componente de filtros principales
const anioOptions = ['Todos los Años', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'];

// Lógica para generar el dropdown de años dinámicamente
const anioDropdownContainer = document.getElementById('anioDropdownContainer');
const dropdownHTML = `
  <select id="anioDropdown" class="form-control" name="anioDropdown">
    ${anioOptions.map(option => `<option value="${option}">${option}</option>`).join('')}
  </select>
`;
anioDropdownContainer.innerHTML = dropdownHTML;

// fin de filtros principales

let contribuyente = { nombre: 'Nombre del Contribuyente', direccion: 'Dirección del Contribuyente' };

// Datos
const nombreContainer = document.getElementById('nombre-container');
nombreContainer.innerHTML = `<span class=''>______________${contribuyente.nombre}____________</span>`;

const direccionContainer = document.getElementById('direccion-container');
direccionContainer.innerHTML = `<span>_____________${contribuyente.direccion}___________</span>`;


// Lógica para generar el input de fecha dinámicamente

 // Obtener la fecha actual en formato YYYY-MM-DD
 const today = new Date().toISOString().split('T')[0];

 // Asignar la fecha al input de fecha
 document.getElementById('fechaProyeccion').value = today;

// final de input fecha



// Componente de filtros de procedencia
const procedenciaOptions = [
  'Todas las Procedencias',
  'SUB GERENCIA ADMINISTRACION TRIBUTARIA',
  'SUB GERENCIA DE FISCALIZACION',
  'SUB GERENCIA DE EJECUTORIA COACTIVA',
];

const tipoOptions = ['Detallado', 'Agrupado Trimestralmente'];

// Lógica para generar el dropdown de procedencia dinámicamente
const procedenciaDropdownContainer = document.getElementById('procedenciaDropdownContainer');
const procedenciaDropdownHTML = `
  <select id="procedenciaDropdown" name="procedenciaDropdown" class="form-control">
    ${procedenciaOptions.map(option => `<option value="${option}">${option}</option>`).join('')}
  </select>
`;
procedenciaDropdownContainer.innerHTML = procedenciaDropdownHTML;

// Lógica para generar el dropdown de tipo dinámicamente
const tipoDropdownContainer = document.getElementById('tipoDropdownContainer');
const tipoDropdownHTML = `
  <select id="tipoDropdown" name="tipoDropdown" class="form-control">
    ${tipoOptions.map(option => `<option value="${option}" ${option === 'Agrupado Trimestralmente' ? 'selected' : ''}>${option}</option>`).join('')}
  </select>
`;
tipoDropdownContainer.innerHTML = tipoDropdownHTML;

// fin de filtros de procedencia

// Componente de filtros de materia y situacion
const materiaOptions = [
  'IMPUESTO PREDIAL',
  '[16333] JR. JOSE GALVEZ (EX JOSE VALENCIA) NUM. 0220 * (Arbitrios)',
  '[11750] AV. JAVIER PRADO OESTE NUM. 2485 INT. 0801 * (Arbitrios)',
  '[33538] JR. MARISCAL CASTILLA NUM. 1121 INT. P 74 * (Arbitrios)',
  'GASTOS Y COSTAS PROCESALES',
];

const situacionOptions = ['Todas las Opciones', 'Pendiente', 'Pagado', 'Fraccionado', 'Coactivo', 'Descargado'];

// Lógica para generar el dropdown de materia dinámicamente
const materiaDropdownContainer = document.getElementById('materiaDropdownContainer');
const materiaDropdownHTML = `
  <select id="materiaDropdown" name="materiaDropdown" class="form-control">
    ${materiaOptions.map(option => `<option value="${option}">${option}</option>`).join('')}
  </select>
`;
materiaDropdownContainer.innerHTML = materiaDropdownHTML;

// Lógica para generar el dropdown de situacion dinámicamente
const situacionDropdownContainer = document.getElementById('situacionDropdownContainer');
const situacionDropdownHTML = `
  <select id="situacionDropdown" name="situacionDropdown" class="form-control">
    ${situacionOptions.map(option => `<option value="${option}" ${option === 'Todas las Opciones' ? 'selected' : ''}>${option}</option>`).join('')}
  </select>
`;
situacionDropdownContainer.innerHTML = situacionDropdownHTML;

// fin de filtros de materia y situacion


//capturar datos del formulario
//http://localhost:5500/index.html?codigo=4


document.addEventListener("DOMContentLoaded", async function () {
  // Obtener el parámetro "codigo" de la URL
  const urlSearchParams = new URLSearchParams(window.location.search);
  const codigoParam = urlSearchParams.get("codigo");

  // Poblar la etiqueta input del formulario con el valor de "codigo"
  const codigoInput = document.getElementById("codigo");
  codigoInput.value = codigoParam;

  // Esperar 2 segundos antes de llamar a la API (simulando un middleware)
  await wait(2000);

  // Llamada a la API después de esperar
  try {
    // Convertir codigoParam a un número
    const codigoNumero = parseInt(codigoParam, 10);

    // Verificar si el número es válido
    if (!isNaN(codigoNumero)) {
      // Construir la URL de consulta directa al elemento específico
      const apiUrl = `https://jsonplaceholder.typicode.com/todos/${codigoNumero}`;

      // Obtener datos de la API
      const response = await fetch(apiUrl);
      const data = await response.json();

      // Mostrar los datos en la sección de nombre y dirección
      const nombreContainer = document.getElementById("nombre-container");
      const direccionContainer = document.getElementById("direccion-container");

      // Mostrar el elemento correspondiente a codigoNumero en los datos de la API
      nombreContainer.innerHTML = `<span>${data.title}</span>`;
      direccionContainer.innerHTML = `<span>${data.completed ? 'Completado' : 'No completado'}</span>`;
    
    
      // Luego de mostrar los datos en la página, genera un documento PDF
      const generarPDFBtn = document.getElementById("generarPDFBtn");
      generarPDFBtn.addEventListener("click", function () {
      // Crear una instancia de jsPDF
      const pdf = new jsPDF();

      // Agregar contenido al PDF
      pdf.text(20, 20, 'Datos de la Consulta');
      pdf.text(20, 30, `Código: ${codigoParam}`);
      pdf.text(20, 40, `Título: ${data.title}`);
      pdf.text(20, 50, `Completado: ${data.completed ? 'Sí' : 'No'}`);

      // Guardar o mostrar el PDF (puedes ajustar esto según tus necesidades)
      pdf.save('consulta.pdf');
    });
    
    
    } else {
      console.error("Número de código no válido");
    }
  } catch (error) {
    console.error("Error al llamar a la API:", error);
  }
  
});

// Función para esperar una cantidad de milisegundos
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}





