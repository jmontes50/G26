# Ejercicios de Manipulación del DOM

## Ejercicio 1: Contador interactivo

### Descripción
Crear un contador que se pueda incrementar o decrementar con botones.

### Pasos
1. Crea un archivo HTML con un elemento para mostrar el número y dos botones.
2. En JavaScript, selecciona los elementos del DOM usando `document.getElementById()`.
3. Inicializa una variable para el contador.
4. Crea funciones para incrementar y decrementar el contador.
5. Añade event listeners a los botones usando `addEventListener()`.
6. Actualiza el texto del elemento del contador en cada clic.

### Muestra del código

```javascript
// Seleccionar elementos del DOM
const countDisplay = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');

let count = 0;

function updateDisplay() {
    // Actualizar el texto del elemento countDisplay
}

function increment() {
    // Incrementar count y llamar a updateDisplay
}

function decrement() {
    // Decrementar count y llamar a updateDisplay
}

// Añadir event listeners a los botones
```

> [!TIP]
> Aplica manejo del DOM y event listeners para responder a las interacciones del usuario.

## Ejercicio 2: Lista dinámica de tareas

### Descripción
Crear una lista de tareas donde se puedan añadir y eliminar elementos.

### Pasos
1. Crea un HTML con un input, un botón "Añadir" y una lista vacía.
2. En JavaScript, selecciona los elementos necesarios del DOM.
3. Crea una función para añadir tareas que:
   - Cree un nuevo elemento `li` usando `document.createElement()`.
   - Añada el texto de la tarea al `li`.
   - Cree un botón "Eliminar" para cada tarea.
   - Añada el `li` a la lista usando `appendChild()`.
4. Añade un event listener al botón "Añadir".
5. Implementa la funcionalidad para eliminar tareas.

### Muestra del código

```javascript
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value;
    if (taskText.trim() !== '') {
        const li = document.createElement('li');
        // Añadir texto de la tarea al li
        // Crear botón de eliminar
        // Añadir li a taskList
        // Limpiar input
    }
}

function removeTask(event) {
    // Eliminar el elemento li padre del botón clicado
}

// Añadir event listener al botón de añadir
```

> [!TIP]
> Este ejercicio practica la creación y eliminación dinámica de elementos en el DOM.

## Ejercicio 3: Cambio de estilos en tiempo real

### Descripción
Crear una interfaz que permita cambiar los estilos de un elemento en tiempo real.

### Pasos
1. Crea un HTML con un elemento de texto y controles para cambiar color, tamaño y fuente.
2. En JavaScript, selecciona el elemento de texto y los controles.
3. Para el color, usa un input de tipo "color".
4. Para el tamaño, usa un input de tipo "range".
5. Para la fuente, usa un elemento `select` con opciones.
6. Añade event listeners a cada control.
7. En cada listener, actualiza el estilo correspondiente del elemento de texto usando `element.style.property`.

### Muestra del código

```javascript
const textElement = document.getElementById('textToStyle');
const colorInput = document.getElementById('colorPicker');
const sizeInput = document.getElementById('sizeSlider');
const fontSelect = document.getElementById('fontSelector');

function updateColor() {
    // Actualizar color del texto
}

function updateSize() {
    // Actualizar tamaño del texto
}

function updateFont() {
    // Actualizar fuente del texto
}

// Añadir event listeners a los controles
```
> [!TIP]
> Este ejercicio se enfoca en la manipulación de estilos CSS a través del DOM, utilizando la propiedad `style` de los elementos.