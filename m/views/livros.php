<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portfólio - Livros</title>        
        <!-- Compiled and minified CSS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <!-- Compiled and minified JavaScript -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        <!-- Font-Awesome -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" type="text/css" />
    </head>
    
    <body>
        
        <?php $page = "livros"; ?>
        
        <nav>
            <?php include_once('../../d/views/header.php'); ?>  
        </nav>
        
        <?php include_once('navbar.php'); ?>
                
        <div class="row">
            <h6 class="center-align">Livros e artigos escritos (publicados ou não)</h6><br />
            <div class="row" id="livros"></div>
        </div>
        
        <script src="../../js/livros.js"></script>
        <link href="../../d/css/style.css" rel="stylesheet" type="text/css" />
        
    </body>
    
</html>