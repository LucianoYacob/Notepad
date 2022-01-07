import useLocalStorage from "../../helpers/useLocalStorage.js";
import Item from "../components/Item.js";

const d = document;

// this method is responsible of updating the loacalStorage. (updating or adding)
const setNote = () => {
    const $list = d.getElementById("list");
    const listElements = [...$list.children];
    let activeChild = listElements.findIndex(el => el.classList.contains("active"));

    let title = d.getElementById("input-title").value.trim(),
        note = d.getElementById("note-cont").value.trim(),
        color = d.getElementById("color-selector").value;

    if(title === "" || note === ""){
        alert("You need to add a title and a text to your note.");
        return;
    }
   
    if(activeChild === -1){
        //there aren't any actives elements, so i create an element.
        let id = `${$list.childElementCount}${Math.floor(Math.random() * 100)}`;

        const data = {
            id,
            title,
            note,
            color
        }
        confirmSetNote(data, "add");
    }
   else{    
       //there are actives elements, so update an element

        let id = activeChild;
        
        const $liActived = $list.querySelector(".active");
        $liActived.style.backgroundColor = color;
        $liActived.querySelector(".title").textContent = title;
        // $liActived.querySelector(".title").textContent = title;
        
        const data = {
            id,
            title,
            note,
            color
        }
        confirmSetNote(data, "update");
        
        $liActived.classList.remove("active");
    }
}

const confirmSetNote = (data, method) => {
    const $list = d.getElementById("list");

    if(confirm(`are you sure to ${method === "add" ? "ADD" : "UPDATE"} this note to your notepad?`)){
        useLocalStorage(data, method === "add" ? "add" : "update");
    
        if(method === "add") $list.appendChild(Item(data));
    }
}


export default setNote;