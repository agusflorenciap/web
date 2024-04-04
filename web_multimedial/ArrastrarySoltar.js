function iniciar() {
    var imagenes=document.querySelectorAll('#cajaimagenes > img'); //cargo las img q tenía en cajaimagenes

    for(var i=0; i<imagenes.length;i++)
    {
        imagenes[i].addEventListener('dragstart', arrastrado, false);
        imagenes[i].addEventListener('dragend', finalizado, false);
    }

    var cajas = document.querySelectorAll ('#cajasoltar > div'); //recupero cada div q tenía en cajasoltar (caja1, caja2)
    for (var j=0; j<cajas.length;j++){

        soltar = document.getElementById(cajas[j].getAttribute("id"));
        soltar.addEventListener('dragover', entrando, false);
        soltar.addEventListener('dragleave',saliendo, false);
        soltar.addEventListener('drop',soltado, false);
    }
}
var exito;
window.addEventListener('load',iniciar,false);


function finalizado (e) {
    elemento=e.target;  // la imagen que arrastré
    console.log('drag end', exito);
    if (exito == 'S') {
        elemento.style.visibility = 'hidden';
    }
}

function entrando (e){
    e.preventDefault();
    e.target.style.background='rgba(0,150,0,.2)';
}

function saliendo (e) {
    // console.log('saliendo');
    e.preventDefault();
    e.target.style.background='#FFFFFF';
}

function arrastrado (e) {
    elemento=e.target;
    e.dataTransfer.setData('Text',elemento.getAttribute('id'));
    e.dataTransfer.setDragImage (e.target,0,0);
}

function soltado(e){
    console.log('soltado');
    exito = 'N';
    e.preventDefault();
    e.target.style.background='#FFFFCC';
    var id= e.dataTransfer.getData('Text'); // guardo id de la imagen que estoy arrastrando
    var nomCaja = e.target.getAttribute("id"); // guardo el id de la caja/destino

    // console.log(nomCaja);


    if ((id=="Sol_Mayor") || (id=="Fa_Mayor")) // si es alguno de los 2 acordes correctos
    {
        if(nomCaja!=null) // si no está ocupada (porque cuando ya está ocupada con la imagen el id es null)
        {
            e.target.innerHTML='<img src=imágenes/'+id+'.gif>';
            exito = 'S';
            console.log('dice: ', e.target.innerHTML);
        }       
    }
    else{
        e.target.innerHTML="Intentá otra vez";
        
    }


}
