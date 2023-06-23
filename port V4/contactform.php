<?php

if (isset($_POST['submit'])) {
	$name = $_POST['name'];
	$subject = $_POST['nsubject'];
	$mailFrom = $_POST['nemail'];
	$message = $_POST['nmessage'];

	$mailTo = "frtnenddev@tkscrmit.me";
	$headers = "From: ".$mailFrom;
	$txt = "New e-mail from ".$name.".\n\n".$message;

	mail($mailTo, $subject, $txt, $headers);
	header(Location: "/index.html");
}