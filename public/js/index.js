import App from "./app.js";
import { handleModal } from "../../helpers/handleModal.js";
import readNotes from "../../helpers/readNotes.js";
import deleteNote from "../../helpers/deleteNote.js";
import updateModal from "../../helpers/openUpdateModal.js"
import setNote from "../../helpers/setNote.js";

const d = document;

d.addEventListener("DOMContentLoaded", () => {
    App();
    readNotes();
});

d.addEventListener("click", (e) => {
    const target = e.target;

    if(target.matches("#btn-add") || target.matches("#close-modal") || target.matches("#save-note") || target.matches(".update")){

        if(target.matches("#save-note")) setNote();
        
        if(target.matches(".update")){
            target.parentNode.classList.add("active");
            updateModal();
        }

        handleModal(e);
    }

    if(target.matches(".delete")){
        target.parentNode.classList.add("active");

        if(confirm("Are you sure to delete this note?")){
            const $li = target.parentNode,
                list = [...$li.parentNode.children];

            const id = list.findIndex(e => e.classList.contains("active"));

            deleteNote(id, $li.id);
            alert("Note deleted");
        }

        target.parentNode.classList.remove("active");
    }
});