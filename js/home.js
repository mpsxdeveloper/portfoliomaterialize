var n = [
    'Nome'
];

var v = [
    'DEV PLENO WEB',
    'DESENVOLVIMENTO WEB COM HTML, CSS, JAVASCRIPT E PHP'
];

var s = [
    '<i class="fa-brands fa-github fa-2x" title="Github"></i>',
    '<i class="fa-brands fa-html5 fa-2x" title="HTML5"></i>',
    '<i class="fa-brands fa-css3 fa-2x" title="CSS3"></i>',
    '<i class="fa-brands fa-js fa-2x" title="JavaScript"></i>',
    '<i class="fa-brands fa-php fa-2x" title="PHP"></i>'
];

window.onload = function() {
    var nome = document.getElementById("nome");
    var vagas = document.getElementById("vagas");
    var skills = document.getElementById("skills");
    nome.innerHTML = n[0];
    for(var i = 0; i < v.length; i++) {
        if(i > 0) {
            vagas.innerHTML = vagas.innerHTML + ", " + v[i];
        }
        else {
            vagas.innerHTML = vagas.innerHTML + v[i];
        }
    }
    for(var i = 0; i < s.length; i ++) {
        var icon = document.createElement("i");
        icon.innerHTML = s[i];        
        skills.appendChild(icon);
    }
    
};