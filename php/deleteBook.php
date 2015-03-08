<?php
	//chama o arquivo de conexão com o bd
	include("connection.php");

	$info = $_POST['books'];

	$data = json_decode(stripslashes($info));

	$id = $data->id;

	//consulta sql
	$query = sprintf("DELETE FROM book WHERE id=%d",
		mysql_real_escape_string($id));

	$rs = mysqli_query($conn,$query);

	echo json_encode(array(
		"success" => mysql_errno() == 0
	));
?>