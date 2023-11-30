// Componente de filtros principales
const anioOptions = ['Todos los Años', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'];

// Lógica para generar el dropdown de años dinámicamente
const anioDropdownContainer = document.getElementById('anioDropdownContainer');
const dropdownHTML = `
  <select id="anioDropdown">
    ${anioOptions.map(option => `<option value="${option}">${option}</option>`).join('')}
  </select>
`;
anioDropdownContainer.innerHTML = dropdownHTML;

// fin de filtros principales

// Contenido del archivo index.js
let contribuyente = { nombre: 'Nombre del Contribuyente', direccion: 'Dirección del Contribuyente' };

// Datos
const nombreContainer = document.getElementById('nombre-container');
nombreContainer.innerHTML = `<span class=''>______________${contribuyente.nombre}____________</span>`;

const direccionContainer = document.getElementById('direccion-container');
direccionContainer.innerHTML = `<span>_____________${contribuyente.direccion}___________</span>`;