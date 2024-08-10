const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent'); //el div donde se muestra el contenido

const modalBS = new bootstrap.Modal(modal);

const useModal = (info) => {
    //recibimos info que puede ser el contenido, datos
    //y rellenamos el <div class="modal-content" id="modalContent"></div> con ese contenido
    modalContent.innerHTML = `${info}`;
    //ya llebo el elemento puedo abrir el modal con el método show()
    modalBS.show();
}

export default useModal;