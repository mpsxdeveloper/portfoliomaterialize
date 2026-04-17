var l = [
    '<div class="row">'+    
    '<object class="mt-2" data="../../books/book1.pdf" type="application/pdf" style="width: 100%; min-height: 350px;">'+
    '<div>No online PDF viewer installed</div>'+
    '</object>'+
    '<div class="row"><b>Título do livro/artigo/etc (0000)</b></div>'+
    '</div>',    
    '<div class="row">'+    
    '<object class="mt-2" data="../../books/book2.pdf" type="application/pdf" style="width: 100%; min-height: 350px;">'+
    '<div>No online PDF viewer installed</div>'+
    '</object>'+
    '<div class="row"><b>Título do livro/artigo/etc (0000)</b></div>'+
    '</div>'
];

window.onload = function() {
    var livros = document.getElementById("livros");
    for(var i = 0; i < l.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = l[i];
        livros.appendChild(div);
    }
};