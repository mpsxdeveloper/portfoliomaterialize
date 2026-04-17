var inf = [
    '<div class="col s12">'+
        '<div class="card horizontal">'+      
            '<div class="card-stacked">'+
                '<div class="card-content">'+
                    '<p><i class="fa-brands fa-whatsapp"></i> (00) 00000-0000</p>'+
                '</div>'+
            '</div>'+
        '</div>'+
    '</div>',
    '<div class="col s12">'+
        '<div class="card horizontal">'+      
            '<div class="card-stacked">'+
                '<div class="card-content">'+
                    '<p><i class="fa-solid fa-at"></i> <a href="mailto:{email}@email.com">{email}@email.com</a>'+
                '</div>'+
            '</div>'+
        '</div>'+
    '</div>',
    '<div class="col s12">'+
        '<div class="card horizontal">'+      
            '<div class="card-stacked">'+
                '<div class="card-content">'+
                    '<p><i class="fa-brands fa-discord"></i> <a target="_blank" href="https://www.discord.com/{perfil}0123456789/">https://www.discord.com/{perfil}0123456789/</a></p>'+
                '</div>'+
            '</div>'+
        '</div>'+
    '</div>',
    '<div class="col s12">'+
        '<div class="card horizontal">'+      
            '<div class="card-stacked">'+
                '<div class="card-content">'+
                    '<p><i class="fa-brands fa-instagram"></i> <a target="_blank" href="https://instagram.com/{perfil}0123456789/">https://instagram.com/{perfil}0123456789/</a></p>'+
                '</div>'+
            '</div>'+
        '</div>'+
    '</div>',
    '<div class="col s12">'+
        '<div class="card horizontal">'+      
            '<div class="card-stacked">'+
                '<div class="card-content">'+
                    '<p><i class="fa-brands fa-facebook"></i> <a target="_blank" href="https://facebook.com/{perfil}0123456789/">https://facebook.com/{perfil}0123456789/</a></p>'+
                '</div>'+
            '</div>'+
        '</div>'+
    '</div>',
    '<div class="col s12">'+
        '<div class="card horizontal">'+      
            '<div class="card-stacked">'+
                '<div class="card-content">'+
                    '<p><i class="fa-brands fa-skype"></i> <a target="_blank" href="www.skype.com/{perfil}0123456789/">www.skype.com/{perfil}0123456789/</a></p>'+
                '</div>'+
            '</div>'+
        '</div>'+
    '</div>'
];

window.onload = function() {
    var informacoes = document.getElementById("informacoes");
    for(var i = 0; i < inf.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = inf[i];
        informacoes.appendChild(div);
    }
};