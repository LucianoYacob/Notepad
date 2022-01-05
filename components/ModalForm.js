const d = document;

const ModalForm = () => {
    const $body = d.createElement("div"),
        $inputTitle = d.createElement("input"),
        $inputNote = d.createElement("textarea"),
        $colorLabel = d.createElement("label"),
        $colorSelector = d.createElement("input");

    $body.classList.add("body-modal");

    $inputTitle.id = "input-title";
    $inputNote.id = "note-cont";
    $colorSelector.id = "color-selector";

    $inputTitle.type = "text";
    $colorSelector.type = "color";

    $inputTitle.placeholder = "Title";
    $inputNote.placeholder = "Your Note"
    $inputNote.rows = 8;
    
    $colorLabel.textContent = "Choose a Color";
    $colorLabel.htmlFor = "color-selector";

    $body.appendChild($inputTitle);
    $body.appendChild($inputNote);
    $body.appendChild($colorLabel);
    $body.appendChild($colorSelector);
    
    return $body;
}

export default ModalForm;