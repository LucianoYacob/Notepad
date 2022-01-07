const useLocalStorage = (data = {}, method = "get") => {
    const ls = window.localStorage;

    if(!ls.getItem("notes")){
        ls.setItem("notes", JSON.stringify([]));
    }

    const notes = JSON.parse(ls.getItem("notes"));
    
    if(method === "get"){
        return notes;
    }
    else if(method === "add"){
        notes.push(data);
        ls.setItem("notes", JSON.stringify(notes));
    }
    else if(method === "update"){
        let id = notes[data.id].id;
        notes[data.id] = {
            ...data,
            id,
        }
        ls.setItem("notes", JSON.stringify(notes));
    }
    else if(method === "delete"){
        notes.splice(data.id, 1);
        ls.setItem("notes", JSON.stringify(notes));
    }
}

export default useLocalStorage;