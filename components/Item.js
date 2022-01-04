import { ChangeVisibility as modalVisibility } from "../../helpers/handleModal.js";

const d = document;

export default function Item() {
    const $li = d.createElement("li"),
        $title = d.createElement("span"),
        $btnDelete = d.createElement("button"),
        $btnUpdate= d.createElement("button")

    $li.classList.add("note");
    $title.classList.add("title");
    $btnDelete.classList.add("delete");
    $btnUpdate.classList.add("update");
    
    //$li.id = id;

    $title.textContent = "title";
    $btnDelete.innerHTML = `<i class="far fa-trash-alt"></i>`;
    $btnUpdate.innerHTML = `<i class="far fa-edit"></i>`;
    
    //li.style.backgroundColor = color;


    // Esto lo puedo hacer con la delegacion de evento desde el index, verifico el id del boton q le puedo poner "delete" y x clase pasarle la posicion q quiero q borre, y borrarlo desde ahi
    $btnDelete.addEventListener("click", () => {
        if(confirm("Estas seguro de querer eliminar esta nota?")){
            alert("Nota eliminada");
            // DeleteNote(id);
            // contNotas.removeChild(li);
        }
    });

    $btnUpdate.addEventListener("click", () => {
        $li.classList.add("active");
        // inputTitulo.value = title;
        // textArea.value = note;
        // colorSelector.value = color;
        modalVisibility(3,1, false)
    });

    $li.appendChild($title);
    $li.appendChild($btnDelete);
    $li.appendChild($btnUpdate);

    return $li;
}

// function BuildNote(id, title, note, color){
//     const li = document.createElement("li");
//     const titulo = document.createElement("span");
//     const btnDelete = document.createElement("button");
//     const btnUpdate= document.createElement("button");

//     li.classList.add("note");
//     li.id = id;
//     titulo.classList.add("title");
//     btnDelete.classList.add("delete");
//     btnUpdate.classList.add("update");

//     btnDelete.innerHTML = `<i class="far fa-trash-alt"></i>`;
//     btnUpdate.innerHTML = `<i class="far fa-edit"></i>`;

//     titulo.textContent = title;
    
//     li.appendChild(titulo);
//     li.appendChild(btnUpdate);
//     li.appendChild(btnDelete);

//     li.style.backgroundColor = color;

//     btnDelete.addEventListener("click", () => {
//         if(confirm("Estas seguro de querer eliminar esta nota?")){
//             DeleteNote(id);
//             contNotas.removeChild(li);
//         }
//     });
//     btnUpdate.addEventListener("click", () => {
//         li.classList.add("active");
//         inputTitulo.value = title;
//         textArea.value = note;
//         colorSelector.value = color;
//         ModalBehaviour(3,1, "visible", false)
//     });

//     return li;
// }