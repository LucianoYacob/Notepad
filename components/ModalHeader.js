const ModalHeader = () => {
    const $header = document.createElement("div");
    const $title = document.createElement("h1");
    const $span = document.createElement("span");

    $header.classList.add("header");

    $title.textContent = "Write your Note";
    $span.textContent = "Choose its color depending the importance.";

    $header.appendChild($title);
    $header.appendChild($span);

    return $header;
}

export default ModalHeader;