const d = document;

export default function Item({id, title, color}) {
    const $li = d.createElement("li"),
        $title = d.createElement("span"),
        $btnDelete = d.createElement("button"),
        $btnUpdate= d.createElement("button")

    $li.classList.add("note");
    $title.classList.add("title");
    $btnDelete.classList.add("delete");
    $btnUpdate.classList.add("update");
    
    $li.id = id;

    $title.textContent = title;
    $btnDelete.innerHTML = `<i class="far fa-trash-alt"></i>`;
    $btnUpdate.innerHTML = `<i class="far fa-edit"></i>`;
    
    $li.style.backgroundColor = color;

    $li.appendChild($title);
    $li.appendChild($btnDelete);
    $li.appendChild($btnUpdate);

    return $li;
}