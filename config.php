<?php
    $dbHost = 'localhost';
    $dbUsername = 'root';
    $dbPassword = '';
    $dbName = 'cadastro';

    $conexao = new mysqli( $dbHost, $dbUsername, $dbPassword, $dbPassword, $dbName);

    if($conexao -> connect_errno)
    {
        echo "Erro";
    }
    else
    {  
        echo"conexão efetuada com sucesso";
    }

?>    
