<?php
	//chama o arquivo de conexão com o bd
	include("connection.php");

	$info = $_POST['books'];

	$data = json_decode(stripslashes($info));

	$name = $data->name;
	$author = $data->author;
	$pages = $data->pages;
	$qwerty = $data->qwerty;
	$id = $data->id;

	//consulta sql
	$query = sprintf("UPDATE contact SET name = '%s', author = '%s', pages = '%d', qwerty = '%s', WHERE id=%d",
		mysql_real_escape_string($name),
		mysql_real_escape_string($author),
		mysql_real_escape_string($pages),
		mysql_real_escape_string($qwerty),
		mysql_real_escape_string($id));

	$rs = mysqli_query($conn, $query);

	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"books" => array(
			"id" => $id,
			"name" => $name,
			"author" => $author,
			"pages" => $pages,
			"qwerty" => $qwerty
		)
	));
?>