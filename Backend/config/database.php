<?php
$host = "localhost";
$db_user = "nidal";
$db_pass = "nidal4231"; // Change this if your DB has a password
$db_name = "fabricore";

$conn = new mysqli($host, $db_user, $db_pass, $db_name);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

