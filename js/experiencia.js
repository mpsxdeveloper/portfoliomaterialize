var e = [    
  '<div class="row">'+
  '<div class="col s12">'+
  '<div class="card yellow lighten-4">'+
  '<div class="card-content black-text">'+
  '<span class="card-title"><b>Cargo/Função</b></span>'+
  '<p>Descrição das atividades</p>'+
  '</div>'+
  '<div class="card-action">'+
  '<a href="#" class="black-text"><b>Empresa/Instituição</a></b><br />'+
  '<a href="#" class="black-text"><b><i class="fa-solid fa-calendar-days"></i> 0000 - 0000</a></b>'+
  '</div>'+
  '</div>'+
  '</div>'+
  '</div>',
  '<div class="row">'+
  '<div class="col s12">'+
  '<div class="card yellow lighten-4">'+
  '<div class="card-content black-text">'+
  '<span class="card-title"><b>Cargo/Função</b></span>'+
  '<p>Descrição das atividades</p>'+
  '</div>'+
  '<div class="card-action">'+
  '<a href="#" class="black-text"><b>Empresa/Instituição</a></b><br />'+
  '<a href="#" class="black-text"><b><i class="fa-solid fa-calendar-days"></i> 0000 - 0000</a></b>'+
  '</div>'+
  '</div>'+
  '</div>'+
  '</div>',
  '<div class="row">'+
  '<div class="col s12">'+
  '<div class="card yellow lighten-4">'+
  '<div class="card-content black-text">'+
  '<span class="card-title"><b>Cargo/Função</b></span>'+
  '<p>Descrição das atividades</p>'+
  '</div>'+
  '<div class="card-action">'+
  '<a href="#" class="black-text"><b>Empresa/Instituição</a></b><br />'+
  '<a href="#" class="black-text"><b><i class="fa-solid fa-calendar-days"></i> 0000 - 0000</a></b>'+
  '</div>'+
  '</div>'+
  '</div>'+
  '</div>'
];

window.onload = function() {
    var experiencia = document.getElementById("experiencia");
    for(var i = 0; i < e.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = e[i];
        experiencia.appendChild(div);
    }
};