import Item  from "../components/Item.js";

const d = document;

export const addNote = () => {
    const $list = d.getElementById("list"); 
    
    if(confirm("are you sure to add this note?")){
        $list.appendChild(Item());
    }
}
