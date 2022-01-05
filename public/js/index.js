import App from "./app.js";
import { ChangeVisibility as modalVisibility } from "../../helpers/handleModal.js";
import { handleModal } from "../../helpers/handleModal.js";
import { addNote } from "../../helpers/addNote.js";
import readNotes from "../../helpers/readNotes.js";
import removeLs from "../../helpers/useLocalStorage.js";

const d = document;

d.addEventListener("DOMContentLoaded", () => {
    App();
    readNotes();
});

d.addEventListener("click", (e) => {
    const target = e.target;

    if(target.matches("#btn-add") || target.matches("#close-modal") || target.matches("#save-note")){
        if(target.matches("#save-note")){
            const title = d.getElementById("input-title").value,
                note = d.getElementById("note-cont").value,
                color = d.getElementById("color-selector").value;

            if(title.trim() === "" || note.trim() === "")
                alert("You need to add a title and a text to your note.");
            else{
                let id = d.getElementById("list").childElementCount;

                addNote(id, title, note, color);
            }
        }
        
        handleModal(e);
    }

    if(target.matches(".delete")){
        if(confirm("Estas seguro de querer eliminar esta nota?")){
            const liId = target.parentNode.id;
            alert("Nota eliminada");
            removeLs({id: liId}, "delete");
            // DeleteNote(id);
            // contNotas.removeChild(li);
        }
    }
    if(target.matches(".update")){
        alert("Update");
        target.parentNode.classList.add("active");
        // inputTitulo.value = title;
        // textArea.value = note;
        // colorSelector.value = color;
        modalVisibility(3,1, false)
    }
});