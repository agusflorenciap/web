function iniciar() {
    maximo=305;
    medio=document.getElementById('medio'); ////recupero y pongo en variables
    reproducir=document.getElementById('reproducir');
    pausa=document.getElementById('pausa');
    masdiez=document.getElementById('masdiez'); 
    menosdiez=document.getElementById('menosdiez');

    barra=document.getElementById('barra');
    progreso=document.getElementById('progreso');

    reproducir.addEventListener('click', play, false);
    pausa.addEventListener('click', pause, false);
    masdiez.addEventListener('click', mas10, false);
    menosdiez.addEventListener('click', menos10, false);

    barra.addEventListener('click', mover, false);
}
window.addEventListener('load', iniciar, false);

function play (){
    if(medio.paused) {
       medio.play();
        bucle=setInterval(estado, 1000);
    }
}

function pause (){
    if(!medio.paused && !medio.ended) {
        medio.pause();
        window.clearInterval(bucle);
    }
}

function mas10 (){

    if(!medio.ended) {
        medio.currentTime= medio.currentTime+10; //el tiempo es el de ahora+10
        var total=parseInt(medio.currentTime*maximo/medio.duration); //calculo posición para acomodar la barra de progreso
        progreso.style.width=total+'px';
    }
    
}

function menos10 (){

    if(!medio.ended) {
        medio.currentTime= medio.currentTime-10;
        var total=parseInt(medio.currentTime*maximo/medio.duration);
        progreso.style.width=total+'px';
    }
    
}


function estado(){
    if(!medio.ended){
        var total=parseInt(medio.currentTime*maximo/medio.duration);
        progreso.style.width=total+'px';
    }else{
        progreso.style.width='0px';
        reproducir.innerHTML='Reproducir';
        window.clearInterval(bucle);
    }
}
function mover(e){
    if(!medio.paused && !medio.ended){
        var ratonX=e.pageX-barra.offsetLeft;
        var nuevoTiempo=ratonX*medio.duration/maximo;
        medio.currentTime=nuevoTiempo;
        progreso.style.width=ratonX+'px';
    }
}
