document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("pass");
    const insegura = document.getElementById("contraseña-insegura");
    const media = document.getElementById("contraseña-media");
    const segura = document.getElementById("contraseña-segura");

    passwordInput.addEventListener("input", function() {
        
        const length = passwordInput.value.length;
        
        insegura.textContent = "";
        media.textContent = "";
        segura.textContent = "";
        
        if (length < 6) {
            insegura.textContent = "La contraseña es insegura";
            insegura.setAttribute ("class", "mensaje-error");
        } else if (length >= 6 && length <= 8) {
            media.textContent = "La contraseña es de seguridad media";
            media.setAttribute ("class", "mensaje-normal");
        } else {
            segura.textContent = "La contraseña es segura";
            segura.setAttribute ("class", "mensaje-seguro");
        }
    });
});
