# Ejercicio React: Selector de Regiones de Perú

## Objetivo
Crear un componente en React que permita al usuario seleccionar un departamento de Perú (limitado a Lima, Arequipa y Cusco) y muestre las provincias correspondientes en un segundo select.

## Instrucciones

1. Usa el componente el `App.jsx`.
2. Utiliza el siguiente código como punto de partida:

```jsx
import React, { useState, useEffect } from 'react';

const peruRegions = {
  Lima: ['Lima', 'Barranca', 'Huaral', 'Cañete'],
  Arequipa: ['Arequipa', 'Caylloma', 'Camaná', 'Islay'],
  Cusco: ['Cusco', 'La Convención', 'Quispicanchi', 'Urubamba']
};

function App() {
  // Por hacer: Implementar estados y lógica aquí

  const departaments = Object.keys(peruRegions);

  const handleDepartmentChange = (event) => {
    // Por hacer: Actualizar el departamento seleccionado
  };

  const handleProvinceChange = (event) => {
    // Por hacer: Actualizar la provincia seleccionada
  };

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
        <select id="province" onChange={handleProvinceChange}>
          <option value="">Seleccione una provincia</option>
          {/* Por hacer: Mapear las provincias del departamento seleccionado */}
        </select>
      </div>
      <div>
        <p>Selección actual: {/* Por hacer: Mostrar departamento y provincia seleccionados */}</p>
      </div>
    </div>
  );
}

export default PeruRegionSelector;
```

1. Implementa los siguientes estados usando `useState`:
   * Departamento seleccionado
   * Provincia seleccionada
   * Lista de provincias disponibles

2. Utiliza `useEffect` para actualizar la lista de provincias cuando cambie el departamento seleccionado.

3. Usa los dos selects:
   * Uno para elegir el departamento
   * Otro para elegir la provincia

4. Implementa las funciones `handleDepartmentChange` y `handleProvinceChange` para manejar los cambios en los selects.

5. Muestra la selección actual de departamento y provincia debajo de los selects.

Implementa las funciones handleDepartmentChange y handleProvinceChange para manejar los cambios en los selects.

Muestra la selección actual de departamento y provincia debajo de los selects.

6. puedes utilizar [`Object.keys`](https://es.javascript.info/keys-values-entries) es un método en JavaScript que devuelve un array con las claves (propiedades enumerables) de un objeto.