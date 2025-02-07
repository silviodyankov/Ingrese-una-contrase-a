function alertaUsuario(contra){

    const usuario = document.querySelector('#usuario').value;

        let users = ''; let cont = ''; let text = '';

        if(usuario == ''){
            text += 'Parguela,\n no has puesto Nombre de usuario';
        }
        
        if(contra >= 9 && usuario.value != ''){
            text += 'Hola ' + String(usuario);
        }
        
        if(contra < 9){
            cont += 'Parguela,\n la contraseña es débil';

        }

        alert(text);
}