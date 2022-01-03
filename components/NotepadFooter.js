import Button from "./GenericButton.js"

const NotepadFooter = () => {
    const $noteFooter = document.createElement("div"); 
    
    $noteFooter.classList.add("note-footer");

    $noteFooter.appendChild(Button("Create Note", "btn-add-note"));

    return $noteFooter;
}

export default NotepadFooter;