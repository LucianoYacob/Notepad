import Item  from "../components/Item.js";
import notes from "../../helpers/useLocalStorage.js";

const d = document;

const readNotes = () => {
    const $list = d.getElementById("list"); 

    notes().forEach(note => {
        $list.appendChild(Item(note));
    });

}

export default readNotes;