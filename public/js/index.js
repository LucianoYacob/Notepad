import App from "./app.js";
import { handleModal } from "../../helpers/handleModal.js";
import { addNote } from "../../helpers/addNote.js";
import readNotes from "../../helpers/readNotes.js";
import deleteNote from "../../helpers/deleteNote.js";
import updateNote from "../../helpers/updateNote.js";
import notes from "../../helpers/useLocalStorage.js";


const d = document;

d.addEventListener("DOMContentLoaded", () => {
    App();
    readNotes();
});

d.addEventListener("click", (e) => {
    const target = e.target;

    if(target.matches("#btn-add") || target.matches("#close-modal") || target.matches("#save-note")){
        const $list = d.getElementById("list");
        const childs = [...$list.children];
        let activeChild = childs.findIndex(e => e.classList.contains("active"));

        if(activeChild === -1){
            if(target.matches("#save-note")){
                const title = d.getElementById("input-title").value.trim(),
                    note = d.getElementById("note-cont").value.trim(),
                    color = d.getElementById("color-selector").value;
    
                if(title.trim() === "" || note.trim() === ""){
                    alert("You need to add a title and a text to your note.");
                }
                else{
                    let id = `${d.getElementById("list").childElementCount}${Math.floor(Math.random() * 100)}`;
                    addNote(id, title, note, color);
                }
            }
        }
        else{
            const title = d.getElementById("input-title").value.trim(),
                note = d.getElementById("note-cont").value.trim(),
                color = d.getElementById("color-selector").value;

            if(title.trim() === "" || note.trim() === ""){
                alert("You need to add a title and a text to your note.");
            }
            else{           
                let id = activeChild;
                updateNote(id, title, note, color);
                const $liChanged = $list.querySelector(".active");
                $liChanged.style.backgroundColor = color;
                $liChanged.textContent = title;
                $liChanged.classList.remove("active");
            }
        }
        
        handleModal(e);
    }

    if(target.matches(".delete")){
        target.parentNode.classList.add("active");

        if(confirm("Estas seguro de querer eliminar esta nota?")){
            
            const $li = target.parentNode,
                list = [...$li.parentNode.children];

            const id = list.findIndex(e => e.classList.contains("active"));

            deleteNote(id, $li.id);
            alert("Note deleted");
        }

        target.parentNode.classList.remove("active");
    }
    if(target.matches(".update")){
        target.parentNode.classList.add("active");
    
        const $li = target.parentNode,
        list = [...$li.parentNode.children];
        
        let id = list.findIndex(e => e.classList.contains("active"));
        
        let note = notes("get").find((e, i) => i === id);
    
        d.getElementById("input-title").value = note.title;
        d.getElementById("note-cont").value = note.note;
        d.getElementById("color-selector").value = note.color;

        handleModal(e);
    }
});