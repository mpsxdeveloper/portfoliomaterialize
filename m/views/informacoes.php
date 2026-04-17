<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portfólio - Informações Pessoais</title>        
        <!-- Compiled and minified CSS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <!-- Compiled and minified JavaScript -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        <!-- Font-Awesome -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" type="text/css" />
    </head>
    
    <body>
        
        <?php $page = "informacoes"; ?>
        
        <nav>
            <h4 class="center-align" style="margin-top: 0; padding-top: 8px;">
                Portfólio
            </h4>   
        </nav>
        
        <?php include_once('navbar.php'); ?>
                
        <div class="row">
            <h6 class="center-align">Informações pessoais, sites, redes sociais, etc.</h6><br />
            <div class="row" id="informacoes"></div>           
        </div>
        
        <style>
            p {
                font-size: 16px;
                font-weight: bold;                
            }
            p a {
                color: #000;
            }
        </style>
        
        <script src="../../js/informacoes.js"></script>
        
    </body>
    
</html>