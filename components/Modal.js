import Header from "../components/ModalHeader.js";
import Footer from "../components/ModalFooter.js";
import Body from "../components/ModalForm.js";

const Modal = () => {
    const $modal = document.createElement("div");

    $modal.classList.add("modal");
    $modal.id = "modal";

    $modal.appendChild(Header());
    $modal.appendChild(Body());
    $modal.appendChild(Footer());

    // $modal.style.display = "none";
    return $modal;
}

export default Modal;