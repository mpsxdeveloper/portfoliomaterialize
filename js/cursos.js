var c = [
    '<div class="col s12">'+
    '<div class="card deep-orange lighten-3">'+
    '<div class="card-content black-text">'+
    '<strong><span class="card-title"><h6><i class="fa-brands fa-github"></i> Git/Github</h6></span></strong>'+
    '<p><span class="left"><i class="fa-solid fa-calendar-days"></i> 00/0000</span><span class="right"><i class="fa-solid fa-clock"></i> 00 horas</span></p>'+
    '</div>'+
    '<div class="card-action black-text" style="margin-top: 10px;"><span>Escola/Instituição</span></div>'+    
    '</div>'+
    '</div>',
    '<div class="col s12">'+
    '<div class="card green lighten-4">'+
    '<div class="card-content black-text">'+
    '<strong><span class="card-title"><h6><i class="fa-brands fa-html5"></i> HTML</h6></span></strong>'+
    '<p><span class="left"><i class="fa-solid fa-calendar-days"></i> 00/0000</span><span class="right"><i class="fa-solid fa-clock"></i> 00 horas</span></p>'+
    '</div>'+
    '<div class="card-action black-text" style="margin-top: 10px;"><span>Escola/Instituição</span></div>'+    
    '</div>'+
    '</div>',
    '<div class="col s12">'+
    '<div class="card light-blue lighten-3">'+
    '<div class="card-content black-text">'+
    '<strong><span class="card-title"><h6><i class="fa-brands fa-css3"></i> CSS3</h6></span></strong>'+
    '<p><span class="left"><i class="fa-solid fa-calendar-days"></i> 00/0000</span><span class="right"><i class="fa-solid fa-clock"></i> 00 horas</span></p>'+
    '</div>'+
    '<div class="card-action black-text" style="margin-top: 10px;"><span>Escola/Instituição</span></div>'+    
    '</div>'+
    '</div>',
    '<div class="col s12">'+
    '<div class="card red lighten-4">'+
    '<div class="card-content black-text">'+
    '<strong><span class="card-title"><h6><i class="fa-brands fa-js"></i> JavaScript</h6></span></strong>'+
    '<p><span class="left"><i class="fa-solid fa-calendar-days"></i> 00/0000</span><span class="right"><i class="fa-solid fa-clock"></i> 00 horas</span></p>'+
    '</div>'+
    '<div class="card-action black-text" style="margin-top: 10px;"><span>Escola/Instituição</span></div>'+    
    '</div>'+
    '</div>',
    '<div class="col s12">'+
    '<div class="card yellow lighten-3">'+
    '<div class="card-content black-text">'+
    '<strong><span class="card-title"><h6><i class="fa-brands fa-php"></i> PHP</h6></span></strong>'+
    '<p><span class="left"><i class="fa-solid fa-calendar-days"></i> 00/0000</span><span class="right"><i class="fa-solid fa-clock"></i> 00 horas</span></p>'+
    '</div>'+
    '<div class="card-action black-text" style="margin-top: 10px;"><span>Escola/Instituição</span></div>'+    
    '</div>'+
    '</div>'   
];

window.onload = function() {
    var cursos = document.getElementById("cursos");
    for(var i = 0; i < c.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = c[i];
        cursos.appendChild(div);
    }
};
