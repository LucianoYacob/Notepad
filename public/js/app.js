import Notepad from "../../components/Notepad.js";
// import Modal from "../../components/Modal.js";

export default function App() {
    const $root = document.getElementById("root");

    $root.innerHTML = null;

    $root.appendChild(Notepad());
} 