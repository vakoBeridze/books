<?php
	//chama o arquivo de conexão com o bd
	include("connection.php");

	$info = $_POST['books'];

	$data = json_decode(stripslashes($info));

	$name = $data->name;
	$author = $data->author;
	$pages = $data->pages;
	$qwerty = $data->qwerty;

	//consulta sql
	$query = sprintf("INSERT INTO book (author, name, pages, qwerty) values ('%s', '%s', '%d', '%s')",
        mysql_real_escape_string($author),
        mysql_real_escape_string($name),
        mysql_real_escape_string($pages),
        mysql_real_escape_string($qwerty));

	$rs = mysqli_query($conn,$query);

	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"books" => array(
			"id" => mysql_insert_id(),
			"name" => $name,
			"author" => $author,
			"pages" => $pages,
			"qwerty" => $qwerty
		)
	));
?>