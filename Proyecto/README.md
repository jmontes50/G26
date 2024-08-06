# Resumen Proyecto Final

## Descripción

Este proyecto representa la culminación de la parte de frontend Se desarrollará utilizando React con Vite, permitiendo la participación individual ó en equipos de hasta 3 integrantes. El objetivo es crear una aplicación web funcional que demuestre las habilidades adquiridas durante esta etapa del bootcamp.

## Temática

La temática del proyecto es de libre elección, es ideal que sigan su interés personal. Se les anima a explorar ideas innovadoras o abordar problemas reales, lo que puede resultar en un proyecto más enriquecedor y motivador.

## Características Generales

- El proyecto debe ser una aplicación funcional, no solo una maqueta o prototipo visual.
- Se recomienda enfocar en un MVP (Producto Mínimo Viable) que incluya operaciones CRUD (Crear, Leer, Editar y Eliminar).
- La aplicación debe resolver un problema o necesidad específica dentro de la temática elegida.

## Etapas de Desarrollo

Aquí encontrarás unos pasos sugeridos para el desarrollo del proyecto. Ten en cuenta que estos pueden variar si ya tienes algo avanzado o si cuentas con una idea planteada previamente. Recuerda que son sugerencias y que lo único a presentar es el proyecto final pero te pueden ayudar a avanzar más rápido en el proyecto.

### 1. Prototipado y Maquetación

> El objetivo es visualizar claramente la estructura y el flujo de la aplicación antes de comenzar la codificación.

- Desarrollar un prototipo de bajo nivel (mockup) con máximo 4 vistas principales.
- Crear un prototipo de alto nivel o maquetado usando CSS y herramientas relacionadas.

#### 1.1 Herramientas de prototipado y recursos

- [Figma](https://www.figma.com/)
- [Draw.io](https://app.diagrams.net/)
- [Figma Community - Recursos](https://www.figma.com/community)
- [Dribble - Recursos](https://dribbble.com/)

### 2. Historias de Usuario

- Identificar y describir las funcionalidades clave del proyecto desde la perspectiva del usuario.
- Definir las características principales que harán útil y atractiva la aplicación.
- Ejemplos genéricos de historias de usuario:
  - "Como usuario, quiero poder filtrar los registros para encontrar información específica rápidamente."
  - "Como usuario, deseo ver los registros en una tabla ordenada para tener una visión general de los datos."
  - "Como administrador, necesito poder crear nuevos registros para mantener la información actualizada."

### 3. Selección de API

Elegir una de las siguientes opciones:
- Mockapi (Recomendada): Fácil de configurar y ideal para prototipos rápidos.
- JSON Server: Útil para simular una API REST completa con datos locales.
- API especializada de RapidAPI: Un repositorio de APIs libres de diferentes temáticas. Ten en cuenta que utilizar una API de RapidAPI requerirá invertir tiempo en estudiar y comprender la API específica que elijas.

### 4. Desarrollo

- Implementar las funcionalidades CRUD de manera progresiva.
- Si se definieron historias de usuario, se recomienda desarrollar el proyecto historia por historia, priorizando las más cruciales para el MVP.
- Utilizar herramientas como Trello o GitHub Projects para la organización y seguimiento de tareas.
- Realizar commits frecuentes y descriptivos para mantener un buen control de versiones.

## Características Técnicas

1. **Rutas y Vistas**: 
   - Implementar un mínimo de dos vistas: una principal con renderizado de listas y otra de detalle.
   - Utilizar React Router Dom 6 para la navegación entre vistas.
   - Considerar la implementación de rutas anidadas si el proyecto lo requiere.

2. **Manejo de Estado**: 
   - Utilizar useState para el manejo de estado local en componentes.
   - Implementar useEffect para efectos secundarios, como la carga de datos desde la API.
   - Considerar el uso de custom hooks para lógica reutilizable.

3. **Consumo y Persistencia de Datos**: 
   - Integrar la API seleccionada para el almacenamiento y recuperación de datos.
   - Implementar métodos POST y PUT para crear y actualizar registros.
   - Si la API elegida no soporta estas operaciones, limitarse a peticiones GET y simular las operaciones de escritura localmente.

4. **Componentes**: 
   - Desarrollar la aplicación utilizando componentes funcionales en JSX.
   - Aplicar principios de componentización para crear una estructura modular y mantenible.
   - Utilizar props para la comunicación entre componentes padres e hijos.

5. **Estilos**: 
   - Elegir entre CSS puro, Bootstrap, o cualquier otro framework/librería de CSS.
   - Mantener una consistencia visual a lo largo de la aplicación.
   - Implementar diseños responsivos para diferentes tamaños de pantalla.

6. **Diseño Responsivo**: 
   - Asegurar que la aplicación sea completamente funcional y visualmente atractiva en dispositivos móviles, tablets y desktops.
   - Utilizar media queries o herramientas de CSS frameworks para lograr la responsividad.

## Opciones Adicionales

Para aquellos que deseen ir más allá del MVP, se sugieren las siguientes opciones avanzadas:

- **Manejo de Estado Avanzado**: Implementar useContext para estados globales simples, o considerar Zustand o Redux-Toolkit para aplicaciones más complejas.
- **Integración con Firebase**: Utilizar Firebase para autenticación de usuarios, almacenamiento en la nube, o funcionalidades en tiempo real.
- **Pruebas con Jest y React Testing Library**: Desarrollar pruebas unitarias y de integración para asegurar la calidad y robustez del código.

## Aspectos a Evaluar

1. Presentación clara y concisa del proyecto, sus objetivos y la problemática que resuelve.
2. Nivel de relevancia, creatividad e innovación en la solución propuesta.
3. Uso efectivo y justificado de las herramientas y tecnologías elegidas.
4. Demostración fluida y completa de las funcionalidades del proyecto.
5. Calidad y cantidad de funcionalidades implementadas en relación al MVP propuesto.
6. Éxito en el despliegue del proyecto y accesibilidad para los usuarios finales.
7. Claridad y eficacia en la comunicación durante la presentación del proyecto.
8. Gestión eficiente del tiempo durante el desarrollo y la presentación.
9. Capacidad para responder preguntas técnicas y conceptuales sobre el proyecto.

## Trabajo en Equipo

En caso de surgir problemas de colaboración en proyectos grupales:

1. Priorizar la comunicación abierta y honesta entre los miembros del equipo para resolver conflictos internamente.
2. Si los problemas persisten, notificar al docente o mentor del curso para buscar orientación y mediación.
3. Independientemente de los desafíos, mantener el compromiso de continuar el proyecto con los recursos disponibles.
4. Documentar las contribuciones individuales y los acuerdos del equipo para mantener la transparencia.