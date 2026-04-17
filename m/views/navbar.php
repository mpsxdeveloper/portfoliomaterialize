<ul id="slide-out" class="sidenav">    
    <li><a href="../views/home.php" class="<?=$page=='home'?'teal lighten-2':'';?>">
        <i class="fa-solid fa-house"></i>Início</a>
    </li>
    <li><a href="../views/formacao.php" class="<?=$page=='formacao'?'teal lighten-2':'';?>">
        <i class="fa-solid fa-graduation-cap"></i>Formação</a>
    </li>
    <li><a href="../views/cursos.php" class="<?=$page=='cursos'?'teal lighten-2':'';?>">
        <i class="fa-solid fa-chalkboard-user"></i>Cursos</a>
    </li>
    <li><a href="../views/projetos.php" class="<?=$page=='projetos'?'teal lighten-2':'';?>">
        <i class="fa-solid fa-laptop-code"></i>Projetos</a>
    </li>
    <li><a href="../views/livros.php" class="<?=$page=='livros'?'teal lighten-2':'';?>">
        <i class="fa-solid fa-book"></i>Livros</a>
    </li>
    <li><a href="../views/experiencia.php" class="<?=$page=='experiencia'?'teal lighten-2':'';?>">
        <i class="fa-solid fa-building"></i>Experiência</a>
    </li>
    <li><a href="../views/informacoes.php" class="<?=$page=='informacoes'?'teal lighten-2':'';?>">
        <i class="fa-solid fa-circle-info"></i>Informações</a>
    </li>
    <li><div class="divider"></div></li>
    <li><a class="sidenav-close" href="#!"><i class="fa-solid fa-rectangle-xmark"></i>Fechar</a></li>
    </div>
</ul>
<a href="#" data-target="slide-out" class="sidenav-trigger"><i class="fa-solid fa-2x fa-bars"></i></a>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var options = null;
        var instances = M.Sidenav.init(elems, options);
    });
</script>