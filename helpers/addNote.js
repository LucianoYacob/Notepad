import Item  from "../components/Item.js";
import useLocalStorage from "../../helpers/useLocalStorage.js";

const d = document;

export const addNote = (id, title, note, color) => {
    const $list = d.getElementById("list"); 

    if(confirm("are you sure to add this note to your notepad?")){
        const data = {
            id,
            title,
            note,
            color
        }
        useLocalStorage(data, "set");
        $list.appendChild(Item({id, title, color}));
    }
}