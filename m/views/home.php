<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portfólio - <?=date('Y')?></title>        
        <!-- Compiled and minified CSS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <!-- Compiled and minified JavaScript -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        <!-- Font-Awesome -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" type="text/css" />
    </head>
    
    <body>
        
        <?php $page = "home"; ?>
        
        <nav>
            <?php include_once('../../d/views/header.php'); ?>
        </nav>
        
        <?php include_once('../views/navbar.php'); ?>
        
        <ul class="collection center-align" id="profile">
            <li class="collection-item center-align"><img src="../../profiles/photo.jpg" style="border-radius: 50%;" width="100" height="100" /></li>
            <li class="collection-item center-align"><i class="fa-solid fa-signature"></i> <span id="nome"></span></li>
            <li class="collection-item"><i class="fa-solid fa-location-dot"></i> Cidade</li>
            <li class="collection-item"><i class="fa-solid fa-globe"></i> País</li>
            <li class="collection-item"><i class="fa-solid fa-laptop-code"></i> Principais profissões</li>
            <li class="collection-item"><i class="fa-solid fa-clipboard-list"></i> Habilidades<br /><br />
                <div id="skills"></div>
            </li>
            <li class="collection-item"><i class="fa-solid fa-magnifying-glass"></i> Buscando vagas de:<br /><br />
                <div id="vagas"></div>
            </li>
        </ul>
        
        <script src="../../js/home.js"></script>
        <link href="../../d/css/style.css" rel="stylesheet" type="text/css" />
        
    </body>
    
</html>