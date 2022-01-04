import App from "./app.js";

const d = document;

d.addEventListener("DOMContentLoaded", App);
d.addEventListener("click", (e) => {
    if(e.target.matches("#btn-add")){
        d.getElementById("modal").style.display = "flex";
    }
});