var f = [
    '<div class="col s12">'+
    '<div class="card blue-grey darken-1">'+
    '<div class="card-content white-text">'+
    '<span class="card-title"><i class="fa-solid fa-graduation-cap"></i> Pós-Graduação</span>'+
    '<strong><p>Especialização, Mestrado, Doutorado</p></strong>'+
    '</div>'+
    '<div class="card-action white-text"><span>Escola/Instituição</span></div>'+
    '<div class="card-action">'+
    '<a href="#"><i class="fa-solid fa-calendar-days"></i> Ano</a>'+
    '<a href="#"><i class="fa-solid fa-clock"></i> Carga horária</a>'+
    '</div>'+
    '</div>'+
    '</div>',
    '<div class="col s12">'+
    '<div class="card blue-grey darken-1">'+
    '<div class="card-content white-text">'+
    '<span class="card-title"><i class="fa-solid fa-graduation-cap"></i> Graduação</span>'+
    '<strong><p>Título/Descrição</p></strong>'+
    '</div>'+
    '<div class="card-action white-text"><span>Escola/Instituição</span></div>'+
    '<div class="card-action">'+
    '<a href="#"><i class="fa-solid fa-calendar-days"></i> Ano</a>'+
    '<a href="#"><i class="fa-solid fa-clock"></i> Carga horária</a>'+
    '</div>'+
    '</div>'+
    '</div>',
    '<div class="col s12">'+
    '<div class="card blue-grey darken-1">'+
    '<div class="card-content white-text">'+
    '<span class="card-title"><i class="fa-solid fa-graduation-cap"></i> Curso Técnico</span>'+
    '<strong><p>Título/Descrição</p></strong>'+
    '</div>'+
    '<div class="card-action white-text"><span>Escola/Instituição</span></div>'+
    '<div class="card-action">'+
    '<a href="#"><i class="fa-solid fa-calendar-days"></i> Ano</a>'+
    '<a href="#"><i class="fa-solid fa-clock"></i> Carga horária</a>'+
    '</div>'+
    '</div>'+
    '</div>'
];

window.onload = function() {
    var formacao = document.getElementById("formacao");
    for(var i = 0; i < f.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = f[i];
        formacao.appendChild(div);
    }
};