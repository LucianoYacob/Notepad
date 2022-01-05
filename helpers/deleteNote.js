import notes from "../../helpers/useLocalStorage.js";

const d = document;

const deleteNote = (id, elementID) => {
    const $list = d.getElementById("list"); 

    notes({id}, "delete");

    $list.removeChild(d.getElementById(elementID));
}

export default deleteNote;