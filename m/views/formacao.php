<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portfólio - Formação</title>        
        <!-- Compiled and minified CSS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <!-- Compiled and minified JavaScript -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        <!-- Font-Awesome -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" type="text/css" />
    </head>
    
    <body>
        
        <?php $page = "formacao"; ?>
        
        <nav>
            <?php include_once('../../d/views/header.php'); ?>
        </nav>
        
        <?php include_once('navbar.php'); ?>
                
        <div class="row">
            <h6 class="center-align">Formação técnica, graduação, pós-graduação, etc.</h6><br />
            <div class="row" id="formacao"></div>           
        </div>
        
        <script src="../../js/formacao.js"></script>
        <link href="../../d/css/style.css" rel="stylesheet" type="text/css" />
        
    </body>
    
</html>