import useLocalStorage from "../../helpers/useLocalStorage.js";

const d = document;

const updateNote = (id, title, note, color) => {
    const $list = d.getElementById("list"); 


    if(confirm("are you sure to UPDATE this note to your notepad?")){
        const data = {
            id,
            title,
            note,
            color
        }
        useLocalStorage(data, "update");
    }

}

export default updateNote;