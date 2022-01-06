import notesLS from "../../helpers/useLocalStorage.js";

const d = document;

// This method is responsible of update modal window with the data of the LS.
const updateNote = () => {
    const $list = d.getElementById("list");
    const listElements = [...$list.children];
    let activeChild = listElements.findIndex(el => el.classList.contains("active"));
    let id = activeChild;
    let noteElement = notesLS("get").find((e, i) => i === id);

    d.getElementById("input-title").value = noteElement.title;
    d.getElementById("note-cont").value = noteElement.note;
    d.getElementById("color-selector").value = noteElement.color;

}

export default updateNote;