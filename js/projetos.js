var p = [    
  '<div class="card small">'+
  '<div class="card-image waves-effect waves-block waves-light">'+
  '<img class="activator" src="../../screenshots/projeto1.png">'+
  '</div>'+
  '<div class="card-content">'+
  '<span class="card-title activator grey-text text-darken-4">Nome do projeto<i class="fa-solid fa-ellipsis-vertical right"></i></span>'+
  '<p><a href="<url do projeto>" target="_blank">Link para o projeto</a></p>'+
  '</div>'+
  '<div class="card-reveal">'+
  '<span class="card-title grey-text text-darken-4">Detalhes <i class="fa-solid fa-xmark right"></i></span>'+
  '<p>Descrição/Mais detalhes do projeto</p>'+
  '</div>'+
  '</div>',
  '<div class="card small">'+
  '<div class="card-image waves-effect waves-block waves-light">'+
  '<img class="activator" src="../../screenshots/projeto1.png">'+
  '</div>'+
  '<div class="card-content">'+
  '<span class="card-title activator grey-text text-darken-4">Nome do projeto<i class="fa-solid fa-ellipsis-vertical right"></i></span>'+
  '<p><a href="<url do projeto>" target="_blank">Link para o projeto</a></p>'+
  '</div>'+
  '<div class="card-reveal">'+
  '<span class="card-title grey-text text-darken-4">Detalhes <i class="fa-solid fa-xmark right"></i></span>'+
  '<p>Descrição/Mais detalhes do projeto</p>'+
  '</div>'+
  '</div>',
  '<div class="card small">'+
  '<div class="card-image waves-effect waves-block waves-light">'+
  '<img class="activator" src="../../screenshots/projeto1.png">'+
  '</div>'+
  '<div class="card-content">'+
  '<span class="card-title activator grey-text text-darken-4">Nome do projeto<i class="fa-solid fa-ellipsis-vertical right"></i></span>'+
  '<p><a href="<url do projeto>" target="_blank">Link para o projeto</a></p>'+
  '</div>'+
  '<div class="card-reveal">'+
  '<span class="card-title grey-text text-darken-4">Detalhes <i class="fa-solid fa-xmark right"></i></span>'+
  '<p>Descrição/Mais detalhes do projeto</p>'+
  '</div>'+
  '</div>'
];

window.onload = function() {
    var projetos = document.getElementById("projetos");
    for(var i = 0; i < p.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = p[i];
        projetos.appendChild(div);
    }
};