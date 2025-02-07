// Contenido del DOM Cargado
document.addEventListener("DOMContentLoaded", function () {

    const passwordInput = document.getElementById("pass");
    // Canvio el nombre de los ID de ñ a ny, se recomienda en programacion no gastar ñ en os nombres, para curarte en salud
    const insegura = document.getElementById("contrasenya-insegura");
    const media = document.getElementById("contrasenya-media");
    const segura = document.getElementById("contrasenya-segura");

    //Canvio el nombre del event de input a keydown
    passwordInput.addEventListener("keydown", function() {
        const length = passwordInput.value.length;
        
        insegura.textContent = ""; media.textContent = ""; segura.textContent = "";
        
        insegura.style.display = "none"; media.style.display = "none"; segura.style.display = "none";

        if (length < 6) {
            insegura.style.display = "block";

            insegura.textContent = "La contraseña es insegura";
            insegura.setAttribute ("class", "mensaje-error");
        } else if (length >= 6 && length <= 8) {
            media.style.display = "block";
            
            media.textContent = "La contraseña es de seguridad media";
            media.setAttribute ("class", "mensaje-normal");
        } else{
            segura.style.display = "block";

            segura.textContent = "La contraseña es segura";
            segura.setAttribute ("class", "mensaje-seguro");

            una_vez( passwordInput.value.length );
        }
    });

    document.getElementById('btn').addEventListener('click', (e) => {
        alertaUsuario( passwordInput.value.length );
    });
    
});
