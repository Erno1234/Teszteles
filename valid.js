function validateForm() {
    let x = document.validTeszt.kNev.value;
    if (x === "") {
        alert("A mező kitöltése kötelező!");
        return false;
    }
    let jelszo = document.validTeszt.jelszo.value;
    let jelszoK = document.validTeszt.jelszo.value;
    if (jelszo !== jelszoK){
        alert("Nem egyeznek a jelszavak!");
        jelszoK.focus();
        return false;

    }
    
}
