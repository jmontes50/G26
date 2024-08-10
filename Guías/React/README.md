# Guía de instalación de Node.js y creación de un proyecto React con Vite

## Instalación de Node.js

1. Visita el sitio oficial de Node.js: https://nodejs.org/
2. Descarga la versión LTS (Long Term Support) para tu sistema operativo.
3. Ejecuta el instalador y sigue las instrucciones en pantalla.
4. Verifica la instalación abriendo una terminal y ejecutando:

```bash
node --version
npm --version
```

## Creación de un proyecto React con Vite

1. Abre una terminal y navega hasta el directorio donde quieres crear tu proyecto.

2. Ejecuta el siguiente comando para crear un nuevo proyecto:

```bash
npm create vite@latest my-react-app -- --template react
```

Reemplaza "my-react-app" con el nombre que desees para tu proyecto.

3. Navega al directorio del proyecto:

```bash
cd my-react-app
```

4. Instala las dependencias:

```bash
npm install
```

5. Inicia el servidor de desarrollo:

```bash
npm run dev
```


6. Abre tu navegador y visita la URL mostrada en la terminal (generalmente http://localhost:5173).

## Estructura básica del proyecto

Tu nuevo proyecto React con Vite tendrá una estructura similar a esta:


```bash
my-react-app/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

Ahora puedes empezar a desarrollar tu aplicación React en el directorio `src`.

## Recursos Extra

- [Instalación de Node.js video](https://www.youtube.com/watch?v=29mihvA_zEA)
- [Creación de un proyecto de React con Vite](https://www.youtube.com/watch?v=xqSkjzrnBWY)