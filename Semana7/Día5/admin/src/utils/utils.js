import { v4 as uuidv4 } from 'uuid';

const cambiarNombreConUUID = (nombreArchivo) => {
    const [, extension] = nombreArchivo.split(".");
    const nuevoUUID = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d' algo asi
    const nuevoNombre = `${nuevoUUID}.${extension}`;
    return nuevoNombre;
}

export {
    //puedo tener varias funcioncitas chiquitas que hagan cosas pequeñas
    cambiarNombreConUUID
}