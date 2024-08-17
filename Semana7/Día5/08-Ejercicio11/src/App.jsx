import React, { useState, useEffect } from 'react';

const peruRegions = {
  Lima: ['Lima', 'Barranca', 'Huaral', 'Cañete'],
  Arequipa: ['Arequipa', 'Caylloma', 'Camaná', 'Islay'],
  Cusco: ['Cusco', 'La Convención', 'Quispicanchi', 'Urubamba']
};

function App() {
  // Por hacer: Implementar estados y lógica aquí
  const [dptoSeleccionado, setDptoSeleccionado] = useState('');
  const [provDisponibles, setProvDisponibles] = useState([]);
  const [provSeleccionada, setProvSeleccionada] = useState('')

  const departaments = Object.keys(peruRegions);

  const handleDepartmentChange = (event) => {
    // Por hacer: Actualizar el departamento seleccionado
    setDptoSeleccionado(event.target.value);
  };

  const handleProvinceChange = (event) => {
    // Por hacer: Actualizar la provincia seleccionada
    setProvSeleccionada(event.target.value);
  };

  useEffect(() => {
    if(dptoSeleccionado !== '') {
      setProvDisponibles(peruRegions[dptoSeleccionado])
      setProvSeleccionada('')
    }
  }, [dptoSeleccionado])
  

  return (
    <div>
      <h2>Selector de Regiones de Perú</h2>
      <div>
        <label htmlFor="department">Departamento:</label>
        <select id="department" onChange={handleDepartmentChange}>
          <option value="">Seleccione un departamento</option>
          {departaments.map(dept => (
            <option key={dept} value={dept}>{dept}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="province">Provincia:</label>
        <select id="province" onChange={handleProvinceChange} value={provSeleccionada}>
          <option value="">Seleccione una provincia</option>
          {/* Por hacer: Mapear las provincias del departamento seleccionado */}
          {provDisponibles.map((prov,i) => (
            <option key={i} value={prov}>
              {prov}
            </option>
          ))}
        </select>
      </div>
      <div>
        {/* <p>Selección actual: Por hacer: Mostrar departamento y provincia seleccionados</p> */}
        <p>Selección actual: Dpto: {dptoSeleccionado} Provincia: {provSeleccionada}</p>
      </div>
    </div>
  );
}

export default App;