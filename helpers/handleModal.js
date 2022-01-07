const d = document;

export const handleModal = (e) => {
    if(e.target.matches("#btn-add")){
        d.getElementById("input-title").value = "";
        d.getElementById("note-cont").value = "";
        d.getElementById("color-selector").value = "#f5c1c1";
        ChangeVisibility(3, 1, false)
    }
    else if(e.target.matches("#close-modal") || e.target.matches("#save-note")){
        ChangeVisibility(0, 0, true)

        const $list = d.getElementById("list").children;
        for (const li of $list) {
            if(li.classList.contains("active")){
                li.classList.remove("active")
            }
        }
    }
    else if(e.target.matches(".update")){
        ChangeVisibility(3, 1, false)
    }
}


export function ChangeVisibility(blurAmount, opacity, shutDown){
    const $modal = d.getElementById("modal"),
        $notepad = d.getElementById("notepad");
    
    let visibility = shutDown ? "hidden" : "visible";

    $notepad.style.filter = `blur(${blurAmount}px)`;
    $modal.style.opacity = `${opacity}`;
    
    if(shutDown){
        setTimeout(
            () => $modal.style.visibility = visibility,
            900
        );
    }
    else
        $modal.style.visibility = visibility;
}