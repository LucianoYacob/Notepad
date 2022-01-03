export default function GenericButton(valueText, ...classNames) {
    const $btn = document.createElement("button");

    $btn.classList.add('btn', ...classNames);
    $btn.textContent = valueText;

    return $btn;
}