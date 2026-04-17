<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portfólio - Cursos</title>        
        <!-- Compiled and minified CSS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <!-- Compiled and minified JavaScript -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        <!-- Font-Awesome -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" type="text/css" />
    </head>
    
    <body>
        
        <?php $page = "cursos"; ?>
        
        <nav>
            <?php include_once('../../d/views/header.php'); ?>
        </nav>
        
        <?php include_once('navbar.php'); ?>
                
        <div class="row">
            <h6 class="center-align">Principais cursos finalizados ou em andamento</h6><br />
            <div class="row" id="cursos"></div>           
        </div>
        
        <script src="../../js/cursos.js"></script>
        <link href="../../d/css/style.css" rel="stylesheet" type="text/css" />
        
    </body>
    
</html>
