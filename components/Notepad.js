import NotepadHeader from "../components/NotepadHeader.js";
import NotepadList from "../components/NotepadList.js";
import NotepadFooter from "../components/NotepadFooter.js";

const Notepad = () => {
    const $notepad = document.createElement("main");
    $notepad.classList.add("notepad");
    $notepad.id = "notepad";

    $notepad.appendChild(NotepadHeader());
    $notepad.appendChild(NotepadList());
    $notepad.appendChild(NotepadFooter());

    return $notepad;
}


export default Notepad;