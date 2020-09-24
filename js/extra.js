function visualizar(){
  var listaTrabajos = document.getElementById("aboutme-trabajos__lista");
  if(listaTrabajos.style.display == "none"){
    listaTrabajos.style.display = "block";
  }
  else {
    listaTrabajos.style.display = "none";
  }
}

var tituloTrabajos = document.getElementById("aboutme-trabajos__titulos");

tituloTrabajos.addEventListener("click", visualizar);
