<?php
 
//nome do servidor (127.0.0.1)
$host = "127.0.0.1";
 
//usuário do banco de dados
$user = "root";
 
//senha do banco de dados
$pass = "admin";
 
//nome da base de dados
$db = "book";
 
//executa a conexão com o banco, caso contrário mostra o erro ocorrido
$conn = mysqli_connect($host,$user,$pass, $db) or die (mysql_error());

////seleciona a base de dados daquela conexão, caso contrário mostra o erro ocorrido
//$res = mysql_select_db($db, $conn) or die(mysql_error());
//
?>