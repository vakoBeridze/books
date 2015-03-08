<?php
//chama o arquivo de conexão com o bd
include("connection.php");

//	$start = $_REQUEST['start'];
//	$limit = $_REQUEST['limit'];

$queryString = "SELECT * FROM book";

//consulta sql
$query = mysqli_query($conn, $queryString) or die(mysql_error());
var_dump($query);
//faz um looping e cria um array com os campos da consulta
$books = array();
while ($book = mysqli_fetch_array($query)) {
    $books[] = $book;
}

//consulta total de linhas na tabela
//$queryTotal = mysqli_query($conn, 'SELECT count(*) as num FROM book') or die(mysql_error());
//$row = mysqli_fetch_array($queryTotal);
//$total = $row['num'];

//encoda para formato JSON
echo json_encode(array(
    "success" => mysql_errno() == 0,
//    "total" => $total,
    "books" => $books
));
?>