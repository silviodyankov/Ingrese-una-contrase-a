function una_vez(passwd){
    let z = document.querySelector('.login');
    if( passwd >= 10){
        if(z.classList.contains('disabled')){ z.classList.remove('disabled'); }
        if(z.classList.contains('enabled')){ } else {  z.classList.add('enabled'); }
    } else {
        if( z.classList.contains('disabled') ){ } else {  z.classList.add('disabled'); }
        if( z.classList.contains('enabled') ){ z.classList.remove('enabled'); } else {  }
    }
    return;
}