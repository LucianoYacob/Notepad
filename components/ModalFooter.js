import Button from "../components/GenericButton.js";

const ModalFooter = () => {
    const $footer = document.createElement("div");

    $footer.classList.add("footer");

    $footer.appendChild(Button("Save Note", "save-note", "btn-save-note"));
    $footer.appendChild(Button("Close Menu", "close-modal", "btn-close-modal"));

    return $footer;
}

export default ModalFooter;