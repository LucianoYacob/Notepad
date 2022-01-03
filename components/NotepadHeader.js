const d = document;

const NotepadHeader = () => {
    const $header = d.createElement("div");
    const $title = d.createElement("h1");
    const $secondTitle = d.createElement("h2");

    $header.classList.add("note-header");
    $title.classList.add("title");
    $secondTitle.classList.add("notepad-h2");

    $title.textContent = "Note App";
    $secondTitle.textContent = "Create, Delete & Update your notes";

    $header.appendChild($title);
    $header.appendChild($secondTitle);

    return $header;
}

export default NotepadHeader;