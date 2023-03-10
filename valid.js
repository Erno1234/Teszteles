window.addEventListener("load", validateForm)
function validateForm() {
    let x = document.validTeszt.kNev.value;
    if (x === "") {
        alert("A mező kitöltése kötelező!");
        return false;
    }
}
