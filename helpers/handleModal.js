const d = document;

export const handleModal = (e) => {
    if(e.target.matches("#btn-add")){
        ChangeVisibility(3, 1, false)
    }
    else if(e.target.matches("#close-modal") || e.target.matches("#save-note")){
        ChangeVisibility(0, 0, true)
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
            1000
        );
    }
    else
        $modal.style.visibility = visibility;
}