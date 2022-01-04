import App from "./app.js";
import { handleModal } from "../../helpers/handleModal.js";
import { addNote } from "../../helpers/addNote.js";

const d = document;

d.addEventListener("DOMContentLoaded", App);
d.addEventListener("click", (e) => {
    const target = e.target;
    if(target.matches("#btn-add") || target.matches("#close-modal")){
        handleModal(e);
    }
    if(target.matches("#save-note")){
        addNote();
        handleModal(e);
    }
});