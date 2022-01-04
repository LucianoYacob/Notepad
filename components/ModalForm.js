
{/* <div class="body-modal">
<input type="text" id="input-titulo" placeholder="Titulo" maxlength="30" autocomplete="off">

<textarea id="cont-nota" rows="8" placeholder="Nota"></textarea>

<label for="color-selector">Choose a Color</label>
<input type="color" name="color-selector" id="color-selector">
</div> */}

const d = document;

const ModalForm = () => {
    const $body = d.createElement("div"),
        $inputTitle = d.createElement("input"),
        $note = d.createElement("textarea"),
        $colorLabel = d.createElement("label"),
        $colorSelector = d.createElement("input");

    $body.classList.add("body-modal");

    $inputTitle.id = "input-title";
    $note.id = "note-cont";
    $colorSelector.id = "color-selector";

    $inputTitle.type = "text";
    $colorSelector.type = "color";

    $inputTitle.placeholder = "Title";
    $note.placeholder = "Your Note"
    $note.rows = 8;
    
    $colorLabel.textContent = "Choose a Color";
    $colorLabel.htmlFor = "color-selector";

    $body.appendChild($inputTitle);
    $body.appendChild($note);
    $body.appendChild($colorLabel);
    $body.appendChild($colorSelector);
    
    return $body;
}

export default ModalForm;