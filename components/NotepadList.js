import Item from "./ItemList.js";

const d = document;

const NotepadList = () => {
    const $listContainer = d.createElement("div");
    const $list = d.createElement("ul");

    $listContainer.classList.add("note-list");
    $list.classList.add("cont-notas");

    $listContainer.appendChild($list);

    return $listContainer;
}

export default NotepadList;